export function encryptText(text: string): string {
  const encoded = btoa(unescape(encodeURIComponent(text)));
  return `🔐 Encrypted:\n${encoded}`;
}
