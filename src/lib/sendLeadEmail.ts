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

const SERVICE_ID = "service_jqlqzbj"
const TEMPLATE_ID = "template_ldt5hzd"
const PUBLIC_KEY = "R16rlcgN0FAYIs1Xq"
const EMAIL_TO = "jussilene.valim@gmail.com"

export async function sendLeadEmail(payload: LeadPayload) {
  const params = {
    title: payload.title || "",
    nome: payload.name || "",
    name: payload.name || "",
    email: payload.email || "",
    phone: payload.phone || "",
    empresa: payload.company || "",
    company: payload.company || "",
    message: payload.message || "",
    source: payload.source || "",
    email_to: EMAIL_TO,
    to_email: EMAIL_TO,
  }

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, params, {
    publicKey: PUBLIC_KEY,
  })
}
