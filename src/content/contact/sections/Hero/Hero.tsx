import { Title } from "@/components/Title";
import { Hero as HeroContainer } from "@/containers/Hero";

export const Hero = () => {
  return (
    <HeroContainer>
      <Title>Entre em contato comigo</Title>

      <p className="mt-6">
        Vamos conversar, trocar ideias e criar juntos! Use o formulário abaixo
        para enviar uma mensagem ou, se preferir, me chame nas redes sociais.
      </p>
    </HeroContainer>
  );
};
