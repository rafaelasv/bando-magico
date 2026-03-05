"use client";

import { useState } from "react";

const nomes = {
  femea: ["Luna", "Pérola", "Jade", "Kiara", "Sol", "Amora", "Nina"],
  macho: ["Zeca", "Apollo", "Fred", "Nico", "Billy", "Chico", "Zeus"],
  unissex: ["Piu-piu", "Mochi", "Coco", "Sunny", "Blue", "Pudim"],
};

export default function Gerador() {
  const [genero, setGenero] = useState(null);
  const [nomeGerado, setNomeGerado] = useState(null);
  const [visivel, setVisivel] = useState(false);

  function gerarNome() {
    if (!genero) return;
    const lista = nomes[genero];
    const nome = lista[Math.floor(Math.random() * lista.length)];
    setVisivel(false);
    setTimeout(() => {
      setNomeGerado(nome);
      setVisivel(true);
    }, 200);
  }

  const botaoGenero = (valor, label) => {
    const ativo = genero === valor;
    return (
      <button
        onClick={() => setGenero(valor)}
        style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: "13px",
          fontWeight: "700",
          padding: "8px 24px",
          borderRadius: "20px",
          border: ativo ? "2px solid #E6A15C" : "2px solid #ccc",
          backgroundColor: ativo ? "#E6A15C" : "transparent",
          color: ativo ? "#fff" : "#6B665F",
          cursor: "pointer",
          transition: "all 0.2s",
          letterSpacing: "0.05em",
        }}
      >
        {label}
      </button>
    );
  };

  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#F7F5EB",
      paddingTop: "120px",
      paddingBottom: "80px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "32px",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Rabiscos decorativos */}
      <img src="/rabisco1.png" alt="" style={{ position: "absolute", top: "100px", right: 0, width: "220px", opacity: 0.6, pointerEvents: "none" }} />
      <img src="/rabisco2.png" alt="" style={{ position: "absolute", bottom: "200px", left: 0, width: "220px", opacity: 0.6, pointerEvents: "none" }} />

      {/* Box com frame desenhado */}
      <div style={{
        position: "relative",
        width: "600px",
        height: "720px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {/* Frame como imagem de fundo */}
        <img src="/frame-generator.png" alt="" style={{
          position: "absolute",
          top: 0, left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }} />

        {/* Conteúdo dentro do frame */}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          padding: "40px",
          width: "100%",
        }}>

          <h1 className="font-chalk" style={{ fontSize: "36px", color: "#6B665F", textAlign: "center" }}>
            Qual o nome da sua psita?
          </h1>

          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "14px", color: "#6B665F" }}>
            Escolha o gênero do nome e clique em gerar!
          </p>

          {/* Seleção de gênero */}
          <div style={{ display: "flex", gap: "12px" }}>
            {botaoGenero("femea", "Fêmea")}
            {botaoGenero("macho", "Macho")}
            {botaoGenero("unissex", "Unissex")}
          </div>

          {/* Botão gerar */}
          <button
            onClick={gerarNome}
            style={{
              backgroundColor: genero ? "#E6A15C" : "#ccc",
              color: "#fff",
              fontSize: "28px",
              padding: "12px 48px",
              borderRadius: "20px",
              border: "none",
              cursor: genero ? "pointer" : "not-allowed",
              transition: "transform 0.2s",
              fontFamily: "var(--font-chalkiez), cursive",
            }}
            onMouseEnter={e => { if (genero) e.target.style.transform = "scale(1.05)"; }}
            onMouseLeave={e => { e.target.style.transform = "scale(1)"; }}
          >
            Gerar Nome!
          </button>

          {/* Nome gerado - espaço sempre reservado */}
          <div style={{
            opacity: visivel ? 1 : 0,
            transition: "opacity 0.4s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            minHeight: "100px",
          }}>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "13px", color: "#6B665F" }}>
              o nome da sua psita é...
            </p>
            <p className="font-chalk" style={{ fontSize: "72px", color: "#E6A15C", lineHeight: "1" }}>
              {nomeGerado}
            </p>
          </div>

        </div>
      </div>

    </main>
  );
}
