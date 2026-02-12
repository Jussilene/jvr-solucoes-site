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
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
const EMAIL_TO    = import.meta.env.VITE_EMAIL_TO as string

export async function sendLeadEmail(payload: LeadPayload) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || !EMAIL_TO) {
    throw new Error("Config EmailJS ausente no build (VITE_EMAILJS_*).")
  }

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

  // ✅ ASSINATURA CORRETA (4º argumento é a PUBLIC KEY string)
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY)
}
