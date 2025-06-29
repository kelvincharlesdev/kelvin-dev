import { ChangeEventHandler } from "react";
import { ContactSchemaType } from "@/schema/contactSchema";

export interface FormContact {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  formData: ContactSchemaType;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  errors: Record<string, string>;
  isLoading?: boolean;
}
