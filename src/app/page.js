import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col relative overflow-hidden bg-white">
      
      {/* HERO SECTION COM IMAGEM DE FUNDO */}
      <section className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/header-psitas.png')"}}>
        
        {/* Overlay para legibilidade */}
        <div className="absolute inset-0 bg-white/45"></div>

        {/* Círculo de brilho ao fundo */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-100 rounded-full blur-3xl opacity-50 -z-20"></div>

        {/* Conteúdo do hero */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start text-left" style={{ paddingLeft: "200px", paddingTop: "250px" }}>
          <h1 className="text-[70px] md:text-[90px] font-normal text-[#E6A15C] font-chalk drop-shadow-md leading-tight">
            O Bando M
            <span className="relative inline-block">
              a
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl">´</span>
            </span>
            gico
          </h1>
          
          <p className="text-xl md:text-2xl text-[#4A4A4A] font-roboto mt-[-10px]">
            Aventuras Encantadas das psitas Jujuba, Theo e Yuki!
          </p>

          {/* Botões dentro do hero */}
          <div className="flex flex-row" style={{ marginTop: "32px", gap: "20px" }}>
            <a href="#conheca-o-bando" className="btn-hero btn-brilhos font-chalk flex items-center justify-center" style={{ backgroundColor: "#E6A15C", color: "#fff", fontSize: "22px", padding: "10px 28px", border: "none", textDecoration: "none" }}>
              Conhecer a Turma
            </a>

            <Link href="/gerador" className="btn-hero font-chalk flex items-center justify-center" style={{ backgroundColor: "transparent", color: "#E6A15C", fontSize: "22px", padding: "10px 28px", border: "2px solid #E6A15C", textDecoration: "none" }}>
              Gerar Nomes
            </Link>
          </div>
        </div>

      </section>

      {/* SEÇÃO: CONHEÇA O BANDO */}
      <section id="conheca-o-bando" style={{ backgroundColor: "#F7F5EB", paddingTop: "80px", paddingBottom: "80px" }} className="w-full px-6 flex flex-col items-center">

        {/* Título */}
        <h2 className="font-roboto text-2xl font-bold text-grafite-lapis tracking-widest mb-3">
          Conheça o Bando
        </h2>

        {/* Linha decorativa tracejada */}
        <div style={{ width: "80px", borderTop: "3px dashed #F9E29C", marginBottom: "48px" }}></div>

        {/* Cards das psitas */}
        <div className="flex flex-row justify-center flex-wrap" style={{ gap: "60px" }}>

          {/* Jujuba */}
          <Link href="/jujuba" className="flex flex-col items-center" style={{ textDecoration: "none" }}>
            <img src="/jujuba-portrait.png" alt="Jujuba" style={{ width: "260px", height: "320px", objectFit: "cover", borderRadius: "12px" }} className="psita-foto mb-4" />
            <p className="font-chalk text-grafite-lapis" style={{ fontSize: "32px", marginBottom: "2px" }}>Jujuba</p>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "15px", color: "#E6A15C" }}>Juju</p>
          </Link>

          {/* Theo */}
          <Link href="/theo" className="flex flex-col items-center" style={{ textDecoration: "none" }}>
            <img src="/theo-portrait.png" alt="Theo" style={{ width: "260px", height: "320px", objectFit: "cover", borderRadius: "12px" }} className="psita-foto mb-4" />
            <p className="font-chalk text-grafite-lapis" style={{ fontSize: "32px", marginBottom: "2px" }}>Theo</p>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "15px", color: "#E6A15C" }}>Sapinho</p>
          </Link>

          {/* Yuki */}
          <Link href="/yuki" className="flex flex-col items-center" style={{ textDecoration: "none" }}>
            <img src="/yuki-portrait.png" alt="Yuki" style={{ width: "260px", height: "320px", objectFit: "cover", borderRadius: "12px" }} className="psita-foto mb-4" />
            <p className="font-chalk text-grafite-lapis" style={{ fontSize: "32px", marginBottom: "2px" }}>Yuki</p>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "15px", color: "#E6A15C" }}>Pupuki</p>
          </Link>

        </div>

      </section>

      {/* SEÇÃO VERDE */}
      <section style={{ backgroundColor: "#A8C69F", minHeight: "300px" }} className="w-full">

        {/* Escalopos no topo (cor da seção anterior) */}
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" style={{ width: "100%", height: "40px", display: "block", marginTop: "-1px" }}>
          <path
            d="M0,0 L1200,0 L1200,3 Q1185,22 1170,3 Q1155,22 1140,3 Q1125,22 1110,3 Q1095,22 1080,3 Q1065,22 1050,3 Q1035,22 1020,3 Q1005,22 990,3 Q975,22 960,3 Q945,22 930,3 Q915,22 900,3 Q885,22 870,3 Q855,22 840,3 Q825,22 810,3 Q795,22 780,3 Q765,22 750,3 Q735,22 720,3 Q705,22 690,3 Q675,22 660,3 Q645,22 630,3 Q615,22 600,3 Q585,22 570,3 Q555,22 540,3 Q525,22 510,3 Q495,22 480,3 Q465,22 450,3 Q435,22 420,3 Q405,22 390,3 Q375,22 360,3 Q345,22 330,3 Q315,22 300,3 Q285,22 270,3 Q255,22 240,3 Q225,22 210,3 Q195,22 180,3 Q165,22 150,3 Q135,22 120,3 Q105,22 90,3 Q75,22 60,3 Q45,22 30,3 Q15,22 0,3 Z"
            fill="#F7F5EB"
          />
        </svg>

        {/* Conteúdo */}
        <div style={{ padding: "60px 40px", display: "flex", flexDirection: "column", alignItems: "center", gap: "48px" }}>

          {/* Título */}
          <h2 className="font-roboto" style={{ fontSize: "42px", fontWeight: "700", color: "#fff", textAlign: "center" }}>
            Você sabia?
          </h2>

          {/* Curiosidades */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", maxWidth: "900px" }}>

            {[
              { titulo: "Originárias da Austrália", texto: "Vivem em bandos nas savanas e florestas abertas do interior australiano." },
              { titulo: "Adoram música", texto: "Muitas aprendem a assoviar músicas e algumas até cantam com a família." },
              { titulo: "São monogâmicas", texto: "Na natureza, escolhem um parceiro para a vida toda e são muito leais." },
              { titulo: "Têm pesadelos", texto: "Podem acordar assustadas à noite e precisar de carinho pra se acalmar." },
              { titulo: "A crista fala por elas", texto: "Crista levantada significa animação. Deitada pode indicar relaxamento ou alerta." },
              { titulo: "Adoram pipoca", texto: "São loucas por pipoca — mas só sem sal e sem óleo, por favor!" },
            ].map(({ titulo, texto }) => (
              <div key={titulo} style={{
                backgroundColor: "rgba(255,255,255,0.25)",
                borderRadius: "16px",
                padding: "24px 28px",
                maxWidth: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}>
                <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: "700", fontSize: "16px", color: "#fff", letterSpacing: "0.03em" }}>{titulo}</p>
                <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "13px", color: "#fff", lineHeight: "1.6" }}>{texto}</p>
              </div>
            ))}

          </div>
        </div>

      </section>

      {/* SEÇÃO HOMENAGEM - JUJUBA */}
      <section style={{ backgroundColor: "#E8E6E1", minHeight: "400px" }} className="w-full">

        {/* Conteúdo - a preencher */}
        <div style={{ padding: "60px 40px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
          <h2 className="font-chalk" style={{ fontSize: "48px", color: "#6B665F", textAlign: "center" }}>
            Jujuba
          </h2>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "15px", color: "#6B665F", textAlign: "center" }}>
            em memória
          </p>
        </div>

      </section>

    </main>
  );
}
