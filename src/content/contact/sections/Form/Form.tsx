"use client";

import { useState } from "react";
import { toast } from "react-toastify";

import { sendContact } from "@/services/sendContact";
import { contactSchema, ContactSchemaType } from "@/schema/contactSchema";

import { FormContact } from "@/containers/FormContact";
import { Title } from "@/components/Title";

export const Form = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ContactSchemaType>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0] ?? "",
        email: fieldErrors.email?.[0] ?? "",
        message: fieldErrors.message?.[0] ?? "",
      });
      setIsLoading(false);
      return;
    }

    setErrors({});

    try {
      const response = await sendContact(result.data);

      if (!response.success) {
        toast.error(response.error);
        return;
      }
      toast.success("Mensagem enviada com sucesso!");

      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast.error("Ocorreu um erro inesperado. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="space-y-4 lg:w-[60%]">
      <Title as="h3">Me envie um e-mail</Title>
      <FormContact
        handleSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
        errors={errors}
        isLoading={isLoading}
      />
    </section>
  );
};
