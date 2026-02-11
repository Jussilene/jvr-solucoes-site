import emailjs from "@emailjs/browser"

export type LeadPayload = {
  formName: "Interesse (Modal)" | "Projeto (Sob Medida)" | "Contato (Mensagem)"
  subject: string
  name: string
  email: string
  phone?: string
  company?: string
  message?: string
  productTitle?: string
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export async function sendLeadEmail(payload: LeadPayload) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      "EmailJS não configurado. Verifique VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID e VITE_EMAILJS_PUBLIC_KEY no .env."
    )
  }

  const templateParams = {
    form_name: payload.formName,
    subject: payload.subject,
    from_name: payload.name,
    from_email: payload.email,
    phone: payload.phone || "-",
    company: payload.company || "-",
    message: payload.message || "-",
    product_title: payload.productTitle || "-",
  }

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
    publicKey: PUBLIC_KEY,
  })
}
