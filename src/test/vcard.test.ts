import { describe, it, expect } from "vitest";
import { buildVCard, buildPhotoLine, verifyVCardPhoto, type ContactInfo } from "@/lib/vcard";

const contact: ContactInfo = {
  name: "Marcio da Silva",
  workPhone: "+49 7361 3893010",
  mobilePhone: "+491742175714",
  email: "marcio@dasilvamedia.de",
  website1: "https://www.dasilvamedia.de",
  website2: "https://lead-connect.de/",
  linkedin: "https://www.linkedin.com/in/marciodasilva23/",
  instagram: "https://www.instagram.com/da.silvamedia/",
};

// Realistic-ish base64 payload (1KB) to exercise folding
const fakePhoto = "A".repeat(1024) + "B".repeat(1024) + "C".repeat(1024);

describe("vCard generation", () => {
  it("includes a properly folded PHOTO line on every one of 10 sequential generations", () => {
    for (let i = 0; i < 10; i++) {
      const vcard = buildVCard(contact, fakePhoto);

      // PHOTO header always present
      expect(vcard, `iteration ${i}`).toContain("PHOTO;ENCODING=b;TYPE=JPEG:");

      // CRLF line endings
      expect(vcard).toContain("\r\n");

      // BEGIN/END envelope intact
      expect(vcard.startsWith("BEGIN:VCARD\r\n")).toBe(true);
      expect(vcard.trimEnd().endsWith("END:VCARD")).toBe(true);

      // Continuation lines (folded base64 chunks) start with a space
      const lines = vcard.split("\r\n");
      const photoIdx = lines.findIndex((l) => l.startsWith("PHOTO;"));
      expect(photoIdx).toBeGreaterThan(-1);

      // At least one continuation line for our 3KB payload
      const hasContinuation = lines.slice(photoIdx + 1).some((l) => l.startsWith(" "));
      expect(hasContinuation).toBe(true);

      // No folded line exceeds 75 chars (header line) / 75 chars (continuation incl. space)
      for (let j = photoIdx; j < lines.length; j++) {
        const line = lines[j];
        if (j > photoIdx && !line.startsWith(" ")) break; // end of PHOTO block
        expect(line.length, `line ${j} length: "${line.slice(0, 80)}..."`).toBeLessThanOrEqual(75);
      }
    }
  });

  it("includes ERP Check and Webseiten Studio URLs", () => {
    const vcard = buildVCard(contact, "");
    expect(vcard).toContain("URL;TYPE=ERP Check:https://erp.dasilvamedia.de/");
    expect(vcard).toContain("URL;TYPE=Webseiten Studio:https://online.pistazz.io/");
  });

  it("buildPhotoLine returns empty string for empty input", () => {
    expect(buildPhotoLine("")).toBe("");
  });

  it("PHOTO is omitted entirely when no photo is provided", () => {
    const vcard = buildVCard(contact, "");
    expect(vcard).not.toContain("PHOTO");
  });

  it("verifyVCardPhoto reports ok=true for a real photo and reconstructs the base64 payload", () => {
    const vcard = buildVCard(contact, fakePhoto);
    const check = verifyVCardPhoto(vcard);
    expect(check.ok).toBe(true);
    expect(check.hasHeader).toBe(true);
    expect(check.base64Length).toBe(fakePhoto.length);
  });

  it("verifyVCardPhoto reports ok=false when PHOTO is missing", () => {
    const vcard = buildVCard(contact, "");
    const check = verifyVCardPhoto(vcard);
    expect(check.ok).toBe(false);
    expect(check.hasHeader).toBe(false);
    expect(check.reason).toMatch(/missing/i);
  });

  it("verifyVCardPhoto reports ok=false when payload is too short", () => {
    const vcard = buildVCard(contact, "AAAA");
    const check = verifyVCardPhoto(vcard);
    expect(check.ok).toBe(false);
    expect(check.hasHeader).toBe(true);
    expect(check.base64Length).toBe(4);
  });
});
