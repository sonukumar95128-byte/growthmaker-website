export const SESSION_COOKIE = "gm_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8; // 8 hours

function getSecret(): string {
  return process.env.SESSION_SECRET || "growth-maker-local-session-secret-change-me";
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function hmacSha256Hex(payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return toHex(signature);
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

export async function createSessionToken(username: string): Promise<string> {
  const expiresAt = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  const payload = `${username}.${expiresAt}`;
  const signature = await hmacSha256Hex(payload);
  return btoa(`${payload}.${signature}`);
}

export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  try {
    const decoded = atob(token);
    const parts = decoded.split(".");
    if (parts.length !== 3) return false;
    const [username, expiresAtRaw, signature] = parts;
    const payload = `${username}.${expiresAtRaw}`;
    const expectedSignature = await hmacSha256Hex(payload);
    const validSignature = timingSafeEqual(signature, expectedSignature);
    const notExpired = Date.now() < Number(expiresAtRaw);
    return validSignature && notExpired;
  } catch {
    return false;
  }
}

export function checkCredentials(username: string, password: string): boolean {
  const validUsername = process.env.ADMIN_USERNAME || "growthmaker";
  const validPassword = process.env.ADMIN_PASSWORD || "Growth@2026";
  return username === validUsername && password === validPassword;
}

export const SESSION_MAX_AGE = SESSION_MAX_AGE_SECONDS;
