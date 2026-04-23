import { expect, test } from "@playwright/test";
import { verifyVCardPhoto } from "../../lib/vcard";

test("downloads the vCard 20 times and every .vcf contains PHOTO", async ({ page }) => {
  await page.goto("/marcio");

  for (let i = 0; i < 20; i++) {
    const downloadPromise = page.waitForEvent("download");
    await page.getByRole("button", { name: /kontakt speichern|save contact|salvar contato|enregistrer le contact/i }).click();
    const download = await downloadPromise;
    const path = await download.path();

    expect(path, `iteration ${i} should produce a file`).toBeTruthy();
    const buffer = await download.createReadStream().then(async (stream) => {
      if (!stream) return Buffer.from("");
      const chunks: Buffer[] = [];
      for await (const chunk of stream) {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
      }
      return Buffer.concat(chunks);
    });

    const vcf = buffer.toString("utf-8");
    const check = verifyVCardPhoto(vcf);
    expect(check.ok, `iteration ${i}: ${check.reason ?? "unknown error"}`).toBe(true);
    expect(check.base64Length, `iteration ${i} photo too short`).toBeGreaterThan(1000);
  }
});