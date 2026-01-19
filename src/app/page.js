import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
   
    <main className="min-h-screen flex flex-col items-center justify-center pt-32 p-4 text-center relative overflow-hidden">
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amarelo-psita rounded-full blur-3xl opacity-40 -z-10"></div>
      
    
      <h1 className="text-[70px] font-normal text-[#E6A15C] font-chalk drop-shadow-md">
        O Bando M
        <span className="relative inline-block">
          a
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl">´</span>
        </span>
        gico
      </h1>
      
      <p className="text-xl text-grafite-lapis font-roboto mt-4">
        Aventuras Encantadas de Jujuba, Theo e Yuki
      </p>

      <div className="my-12 w-full px-4 flex justify-center">
        <Image
          src="/turmapsitas.png"
          alt="Jujuba, Theo e Yuki"
          width={1800}
          height={1125}
          className="h-auto w-full max-w-[900px] drop-shadow-2xl"
          priority
        />
      </div>

      {/* Seção de Botões */}
      <div className="flex flex-row gap-24 z-20 pb-20 relative justify-center">
        <button className="w-[150px] h-[40px] bg-[#A7D477] text-[#1D3A0A] font-bold rounded-full shadow-2xl border-none hover:scale-105 transition-all font-roboto text-[18px] flex items-center justify-center">
          Conhecer a Turma
        </button>

        <button className="w-[150px] h-[40px] bg-[#A7D477] text-[#1D3A0A] font-bold rounded-full shadow-2xl border-none hover:scale-105 transition-all font-roboto text-[18px] flex items-center justify-center">
          Gerar Nomes
        </button>
      </div>

    </main>
  );
}