import { NextRequest, NextResponse } from "next/server";

import { contactSchema } from "@/schema/contactSchema";
import { sendContactEmail } from "@/services/backend/sendContactEmail";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const parseResult = contactSchema.safeParse(data);

    if (!parseResult.success) {
      return NextResponse.json(
        { error: "Dados inválidos", details: parseResult.error.flatten() },
        { status: 400 },
      );
    }

    const { name, email, message } = parseResult.data;

    await sendContactEmail({ name, email, message });

    return NextResponse.json(
      { message: "Email enviado com sucesso" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 },
    );
  }
}
