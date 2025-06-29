import { EmailData } from "@/models/email";

export async function sendContact(
  data: EmailData,
): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (!res.ok) {
      return { success: false, error: json.error || "Erro ao enviar mensagem" };
    }

    return { success: true };
  } catch {
    return { success: false, error: "Erro de rede ou servidor" };
  }
}
