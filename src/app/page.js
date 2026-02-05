import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center relative overflow-hidden bg-white">
      
      {/* HERO SECTION COM IMAGEM DE FUNDO */}
      <section className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/header-psitas.png')"}}>
        
        {/* Overlay para legibilidade */}
        <div className="absolute inset-0 bg-white/45"></div>

        {/* Círculo de brilho ao fundo */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-100 rounded-full blur-3xl opacity-50 -z-20"></div>

        {/* Conteúdo do hero */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start text-left pl-16">
          <h1 className="text-[70px] md:text-[90px] font-normal text-[#E6A15C] font-chalk drop-shadow-md leading-tight">
            O Bando M
            <span className="relative inline-block">
              a
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl">´</span>
            </span>
            gico
          </h1>
          
          <p className="text-xl md:text-2xl text-[#4A4A4A] font-roboto mt-4">
            Aventuras Encantadas de Jujuba, Theo e Yuki
          </p>

          {/* Botões dentro do hero */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-8">
            <button className="w-[220px] h-[55px] bg-[#A7D477] text-[#1D3A0A] font-bold rounded-full shadow-lg hover:scale-105 transition-all font-roboto text-[18px] flex items-center justify-center">
              Conhecer a Turma
            </button>

            <button className="w-[220px] h-[55px] bg-[#A7D477] text-[#1D3A0A] font-bold rounded-full shadow-lg hover:scale-105 transition-all font-roboto text-[18px] flex items-center justify-center">
              Gerar Nomes
            </button>
          </div>
        </div>

      </section>

      {/* Conteúdo principal */}
      <div className="min-h-screen flex flex-col items-center pt-20 pb-20 relative overflow-hidden bg-white w-full">
      </div>

    </main>
  );
}
