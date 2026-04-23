/**
 * vCard 3.0 helpers.
 *
 * The PHOTO field uses ENCODING=b;TYPE=JPEG with strict line folding (75 octets,
 * continuation lines start with a single space, CRLF separators). This format is
 * required for iOS Contacts and Outlook to recognise the embedded image.
 */

export interface ContactInfo {
  name: string;
  workPhone: string;
  mobilePhone: string;
  email: string;
  website1: string;
  website2: string;
  linkedin: string;
  instagram: string;
}

export function buildPhotoLine(base64: string): string {
  if (!base64) return "";
  const header = "PHOTO;ENCODING=b;TYPE=JPEG:";
  const firstChunkLen = Math.max(1, 75 - header.length);
  const first = base64.slice(0, firstChunkLen);
  const rest = base64.slice(firstChunkLen);
  const restFolded = rest.match(/.{1,74}/g)?.map((c) => " " + c).join("\r\n") || "";
  return header + first + (restFolded ? "\r\n" + restFolded : "");
}

export function buildVCard(contact: ContactInfo, photoBase64: string): string {
  const photoLine = buildPhotoLine(photoBase64);
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${contact.name}`,
    "N:da Silva;Marcio;;;",
    "ORG:Da Silva Media",
    `TEL;TYPE=WORK,VOICE:${contact.workPhone}`,
    `TEL;TYPE=CELL,VOICE:${contact.mobilePhone}`,
    `EMAIL;TYPE=INTERNET,PREF:${contact.email}`,
    `URL;TYPE=Da Silva Media:${contact.website1}`,
    `URL;TYPE=Lead Connect:${contact.website2}`,
    `URL;TYPE=ERP Check:https://erp.dasilvamedia.de/`,
    `URL;TYPE=Webseiten Studio:https://online.pistazz.io/`,
    `URL;TYPE=LinkedIn:${contact.linkedin}`,
    `URL;TYPE=Instagram:${contact.instagram}`,
  ];
  if (photoLine) lines.push(photoLine);
  lines.push("END:VCARD");
  return lines.join("\r\n") + "\r\n";
}

export interface VCardPhotoCheck {
  ok: boolean;
  hasHeader: boolean;
  base64Length: number;
  reason?: string;
}

const PHOTO_HEADER = "PHOTO;ENCODING=b;TYPE=JPEG:";
const DEFAULT_MAX_EMBEDDED_PHOTO_BASE64_LENGTH = 180_000;

/**
 * Verifies that a generated vCard string contains a non-empty PHOTO field.
 * Reconstructs the folded base64 payload (continuation lines start with a single space)
 * and checks it is non-trivial (>= 100 chars, looks like base64).
 */
export function verifyVCardPhoto(vcard: string, minBase64Length = 100): VCardPhotoCheck {
  const lines = vcard.split("\r\n");
  const photoIdx = lines.findIndex((l) => l.startsWith(PHOTO_HEADER));
  if (photoIdx === -1) {
    return { ok: false, hasHeader: false, base64Length: 0, reason: "PHOTO header missing" };
  }
  let payload = lines[photoIdx].slice(PHOTO_HEADER.length);
  for (let i = photoIdx + 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.startsWith(" ")) break;
    payload += line.slice(1);
  }
  const base64Length = payload.length;
  if (base64Length < minBase64Length) {
    return { ok: false, hasHeader: true, base64Length, reason: `payload too short (${base64Length})` };
  }
  if (!/^[A-Za-z0-9+/=]+$/.test(payload)) {
    return { ok: false, hasHeader: true, base64Length, reason: "payload not valid base64" };
  }
  return { ok: true, hasHeader: true, base64Length };
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result;
      if (typeof result !== "string") {
        resolve("");
        return;
      }
      resolve(result.split(",")[1] || "");
    };
    reader.onerror = () => reject(new Error("blob read failed"));
    reader.readAsDataURL(blob);
  });
}

export async function fetchJpegAsBase64(src: string): Promise<string> {
  try {
    const response = await fetch(src, { cache: "force-cache" });
    if (!response.ok) return "";
    const blob = await response.blob();
    return await blobToBase64(blob);
  } catch {
    return "";
  }
}

export async function prepareEmbeddedPhotoBase64(
  src: string,
  maxBase64Length = DEFAULT_MAX_EMBEDDED_PHOTO_BASE64_LENGTH,
): Promise<string> {
  const attempts = [
    { maxSize: 640, quality: 0.82 },
    { maxSize: 512, quality: 0.76 },
    { maxSize: 420, quality: 0.72 },
    { maxSize: 320, quality: 0.68 },
    { maxSize: 240, quality: 0.62 },
  ];

  let fallback = "";
  for (const attempt of attempts) {
    const base64 = await encodeImageToJpegBase64(src, attempt.maxSize, attempt.quality);
    if (!base64) continue;
    fallback = base64;
    if (base64.length <= maxBase64Length) {
      return base64;
    }
  }

  return fallback;
}

/**
 * Encode an image URL into a JPEG base64 string sized to maxSize px on the long edge.
 * Returns "" on failure.
 */
export async function encodeImageToJpegBase64(src: string, maxSize = 600, quality = 0.85): Promise<string> {
  try {
    const img = new Image();
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("image load failed"));
      img.src = src;
    });
    const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
    const w = Math.max(1, Math.round(img.width * scale));
    const h = Math.max(1, Math.round(img.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return "";
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(img, 0, 0, w, h);
    const dataUrl = canvas.toDataURL("image/jpeg", quality);
    return dataUrl.split(",")[1] || "";
  } catch {
    return "";
  }
}
