import emailjs from "@emailjs/browser"

export type LeadPayload = {
  title: string
  name: string
  email: string
  phone?: string
  company?: string
  message?: string
  source?: string
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
const EMAIL_TO = import.meta.env.VITE_EMAIL_TO as string

function repairMojibake(value?: string) {
  if (!value) return ""

  const trimmed = value.trim()
  if (!trimmed) return ""

  if (!/[ÃÂâ]/.test(trimmed)) {
    return trimmed
  }

  try {
    const bytes = Uint8Array.from(trimmed, (char) => char.charCodeAt(0))
    const repaired = new TextDecoder("utf-8").decode(bytes).trim()
    return repaired || trimmed
  } catch {
    return trimmed
  }
}

function normalizeText(value?: string) {
  return repairMojibake(value)
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
}

export async function sendLeadEmail(payload: LeadPayload) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || !EMAIL_TO) {
    throw new Error("Config EmailJS ausente no build (VITE_EMAILJS_*).")
  }

  const normalized = {
    title: normalizeText(payload.title),
    name: normalizeText(payload.name),
    email: normalizeText(payload.email),
    phone: normalizeText(payload.phone),
    company: normalizeText(payload.company),
    message: normalizeText(payload.message),
    source: normalizeText(payload.source),
  }

  const params = {
    title: normalized.title,
    subject: normalized.title,
    assunto: normalized.title,
    nome: normalized.name,
    name: normalized.name,
    email: normalized.email,
    phone: normalized.phone,
    empresa: normalized.company,
    company: normalized.company,
    message: normalized.message,
    source: normalized.source,
    email_to: EMAIL_TO,
    to_email: EMAIL_TO,
  }

  try {
    return await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY)
  } catch (err: any) {
    console.error("EmailJS error:", err?.status, err?.text, err)
    throw err
  }
}
