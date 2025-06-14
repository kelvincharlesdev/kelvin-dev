import Image from "next/image";

export const UserProfile = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={"/images/foto-perfil.png"}
        alt="Logo Kelvin"
        width={38}
        height={38}
        className="rounded-full"
      />
      <div className="space-y-0 leading-tight">
        <h1 className="text-base text-gray-100">Kelvin Charles</h1>
        <span className="text-xs text-gray-300">Desenvolvedor Front-End</span>
      </div>
    </div>
  );
};
