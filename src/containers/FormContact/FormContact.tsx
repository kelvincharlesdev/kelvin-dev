import Input from "@/components/Input";

import { LuCircleUserRound, LuMail } from "react-icons/lu";

import { Button } from "@/components/Button";
import * as I from "./FormContact.interface";

export const FormContact = ({
  handleSubmit,
  formData,
  handleChange,
  errors,
  isLoading,
}: I.FormContact) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 rounded-lg border-[0.5px] border-blue-700/50 p-6 shadow-md shadow-blue-700/50"
    >
      <Input.Wrapper>
        <Input.Label id="name" label="Nome" />
        <Input.Field
          name="name"
          id="name"
          type="text"
          placeholder="Digite seu nome..."
          icon={<LuCircleUserRound className="text-gray-700" />}
          value={formData.name}
          onChange={handleChange}
          iconPosition="left"
        />
        {errors.name && <Input.MessageError message={errors.name} />}
      </Input.Wrapper>

      <Input.Wrapper>
        <Input.Label id="email" label="E-mail" />
        <Input.Field
          name="email"
          id="email"
          type="email"
          placeholder="Digite seu e-mail..."
          icon={<LuMail className="text-gray-700" />}
          value={formData.email}
          onChange={handleChange}
          iconPosition="left"
        />
        {errors.email && <Input.MessageError message={errors.email} />}
      </Input.Wrapper>

      <div className="flex flex-col space-y-2">
        <Input.Label id="message" label="Mensagem" />
        <textarea
          name="message"
          id="message"
          placeholder="Mensagem"
          className="h-32 w-full rounded-md border border-gray-700 p-2 focus:border-blue-500 focus:outline-none"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <Input.MessageError message={errors.message} />}
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  );
};
