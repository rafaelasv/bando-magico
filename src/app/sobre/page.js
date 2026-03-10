export default function Sobre() {
  return (
    <main style={{ backgroundColor: "#F7F5EB", minHeight: "100vh" }}>

      {/* SEÇÃO HISTÓRIA */}
      <section style={{ maxWidth: "760px", margin: "0 auto", padding: "100px 40px 80px" }}>

        <h1 className="font-chalk" style={{ fontSize: "52px", color: "#6B665F", marginBottom: "8px" }}>
          Sobre o site
        </h1>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "13px", color: "#B0A99F", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "48px" }}>
          a história por trás do bando mágico
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {[
            "Em dezembro de 2019, trouxe uma calopsita pequena para casa. Ela era muito medrosa, era branca com penas cinzas pelo corpo. De início, dei o nome de Milk – brega pra caramba, achei que combinava, mas ainda não tinha sentido que era O nome. Precisava ser um nome unissex, porque eu não sabia o sexo dela e nisso, acabei trocando para Jujuba.",
            "Demorou um mês e meio para conquistá-la, e depois de incentivá-la a cantar, soube que era macho, juntamente com outros sinais. Ele era muito inteligente, aprendia qualquer música rápido, mas roía muita coisa! Porém, meu pequeno desenvolveu vínculo só comigo. Ele até ia nos pés e perto de outras pessoas, mas não deixava ninguém o pegar.",
            "Na primeira semana de janeiro de 2021, ele fugiu. Costumava doer muito quando eu pensava nisso, quando eu lembrava dele, quando eu encontrava minhas coisas com as bicadas dele, quando eu pegava os brinquedos. Ele fugiu e ficou preso em uma mata fechada, e nunca mais saiu de lá.",
            "Eu não sou uma pessoa religiosa, mas quando lembro do Jujuba, sinto que ele foi um anjinho enviado para mim. Me senti tão sozinha depois que ele se foi, doía ver a gaiola vazia, doía não escutar mais os cantos dele, doía pensar que ele morreu sozinho e assustado. Ele era tão esperto, ele aprendeu a subir escada sozinho... Ele escalava tudo e roía tudo.",
            "Meses depois que o perdi, pensei triste em como o tempo levaria minhas memórias dele, eu não lembraria mais dele da forma que lembrava. No dia que ele fugiu, eu ganhei uma cicatriz procurando ele, e depois fiquei pensando em como sempre poderia tocá-la e lembrar dele. E a ideia desse site surgiu disso tudo, de gravá-lo para sempre em algum lugar e de homenagear as calopsitas, que mudaram minha vida.",
          ].map((paragrafo, i) => (
            <p key={i} style={{ fontFamily: "'Raleway', sans-serif", fontSize: "15px", color: "#6B665F", lineHeight: "1.9" }}>
              {paragrafo}
            </p>
          ))}
        </div>

      </section>

      {/* SEÇÃO JUJUBA */}
      <section style={{ backgroundImage: "url('/ceu.png')", backgroundSize: "cover", backgroundPosition: "center", width: "100%" }}>
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "80px", marginTop: "-1px" }}>
          <path d="M0,0 L0,30 Q40,60 80,35 Q110,65 150,40 Q180,75 230,45 Q270,70 310,42 Q350,72 400,44 Q440,68 480,40 Q520,75 570,42 Q610,70 650,38 Q690,72 740,44 Q780,68 820,40 Q860,75 910,42 Q950,70 990,38 Q1030,72 1080,44 Q1120,68 1160,40 Q1185,60 1200,30 L1200,0 Z" fill="#F7F5EB" />
        </svg>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "40px 40px 120px" }}>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", marginBottom: "56px" }}>
          <h2 className="font-chalk" style={{ fontSize: "52px", color: "#6B665F" }}>
            Jujuba
          </h2>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "13px", color: "#B0A99F", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            em memória · 2019 — 2021
          </p>
        </div>

        <div className="jujuba-layout" style={{ display: "flex", alignItems: "center", gap: "48px" }}>
          <img
            src="/jujuba-memoriam.jpg"
            alt="Jujuba em aquarela"
            style={{ width: "360px", height: "420px", flexShrink: 0, objectFit: "cover", borderRadius: "50%" }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            {[
              "Who's to say where the wind will take you?",
              "Who's to say what it is will break you?",
              "I don't know where the wind will blow",
              "Who's to know when the time has come around?",
              "I don't wanna see you cry",
            ].map((linha, i) => (
              <p key={i} style={{ fontFamily: "'Raleway', sans-serif", fontStyle: "italic", fontSize: "15px", color: "#6B665F", lineHeight: "1.8", margin: "0" }}>
                {linha}
              </p>
            ))}
            <p style={{ fontFamily: "'Raleway', sans-serif", fontStyle: "italic", fontWeight: "700", fontSize: "15px", color: "#6B665F", lineHeight: "1.8", margin: "0" }}>
              I know that this is not goodbye
            </p>
            <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "12px", color: "#B0A99F", marginTop: "8px", letterSpacing: "0.05em" }}>
              Kite — U2
            </p>
          </div>
        </div>

        </div>
      </section>

    </main>
  );
}
