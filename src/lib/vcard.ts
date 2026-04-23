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
