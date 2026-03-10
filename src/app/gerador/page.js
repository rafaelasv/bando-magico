"use client";

import { useState } from "react";

const nomes = {
  femea: ["Luna", "Perola", "Jade", "Kiara", "Sol", "Amora", "Nina", "Mel", "Nala", "Cleo", "Fifi", "Bella", "Lola", "Mia", "Coco", "Rubi", "Flora", "Pipoca", "Neve", "Doris", "Cereja", "Diva", "Iris"],
  macho: ["Zeca", "Apollo", "Fred", "Nico", "Billy", "Chico", "Zeus", "Theo", "Kiwi", "Loki", "Nino", "Pippo", "Ozzy", "Bico", "Caju", "Tuco", "Zico", "Tico", "Rex", "Gus", "Bento", "Nemo", "Curry", "Leo", "Hermes"],
  unissex: ["Piu-piu", "Mochi", "Coco", "Sunny", "Blue", "Pudim", "Mango", "Pisco", "Nori", "Sushi", "Pipoca", "Tofu", "Nugget", "Oreo", "Biscuit", "Limao", "Gengibre", "Amendoim", "Bolinha", "Farofa", "Waffle", "Cookie", "Chips", "Mostarda"],
};

const imagensModal = [
  "/psita-artista-resultado.png",
  "/psita-artista-resultado2.png",
  "/psita-artista-resultado3.png",
];

export default function Gerador() {
  const [genero, setGenero] = useState(null);
  const [nomeGerado, setNomeGerado] = useState(null);
  const [visivel, setVisivel] = useState(false);
  const [imagemModal, setImagemModal] = useState(imagensModal[0]);

  function gerarNome() {
    if (!genero) return;
    const lista = nomes[genero];
    const nome = lista[Math.floor(Math.random() * lista.length)];
    const imagem = imagensModal[Math.floor(Math.random() * imagensModal.length)];
    setVisivel(false);
    setTimeout(() => {
      setNomeGerado(nome);
      setImagemModal(imagem);
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

      {/* MODAL */}
      {visivel && (
        <div
          onClick={() => setVisivel(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          {/* Psita atrás do modal */}
          <img
            src={imagemModal}
            alt=""
            style={{
              position: "absolute",
              bottom: "calc(50% - 340px)",
              left: "calc(50% - 620px)",
              width: "400px",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <div
            onClick={e => e.stopPropagation()}
            style={{ zIndex: 1, position: "relative",
              backgroundColor: "#F7F5EB",
              borderRadius: "24px",
              padding: "64px 96px",
              width: "360px",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
            }}
          >
            <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "14px", color: "#B0A99F" }}>
              Que tal o nome...
            </p>
            <p className="font-chalk" style={{ fontSize: "80px", color: "#E6A15C", lineHeight: "1" }}>
              {nomeGerado}
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
              <button
                onClick={() => {
                  const lista = nomes[genero];
                  const nome = lista[Math.floor(Math.random() * lista.length)];
                  const imagem = imagensModal[Math.floor(Math.random() * imagensModal.length)];
                  setNomeGerado(nome);
                  setImagemModal(imagem);
                }}
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "#fff",
                  backgroundColor: "#E6A15C",
                  border: "none",
                  borderRadius: "20px",
                  padding: "8px 20px",
                  cursor: "pointer",
                  letterSpacing: "0.05em",
                }}
              >
                Gerar outro nome
              </button>
              <button
                onClick={() => setVisivel(false)}
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "13px",
                  color: "#B0A99F",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.05em",
                }}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rabiscos decorativos */}

      {/* Box com frame desenhado */}
      <div style={{
        position: "relative",
        width: "600px",
        height: "720px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {/* Psita artista — fora do frame */}
        <img src="/psita-artista.png" alt="Psita artista" style={{
          position: "absolute",
          left: "-240px",
          bottom: "-5px",
          width: "360px",
          pointerEvents: "none",
        }} />

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


        </div>
      </div>

    </main>
  );
}
