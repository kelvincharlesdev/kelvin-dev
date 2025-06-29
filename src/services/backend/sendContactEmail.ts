import nodemailer from "nodemailer";
import { EmailData } from "@/models/email";

export async function sendContactEmail({ name, email, message }: EmailData) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  await transporter.sendMail({
    from: `"Contato Portfolio" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
    subject: `Nova mensagem de ${name} via Portfolio Kelvin`,
    replyTo: email,
    text: `Nome: ${name}\nEmail: ${email}\nMensagem:\n${message}`,
  });
}
