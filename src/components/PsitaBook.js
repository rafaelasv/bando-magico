import Link from "next/link";

const colorConfig = {
  green: {
    leftBg: "linear-gradient(135deg, #e8f0e0 0%, #d4e8c8 60%, #c8ddb8 100%)",
    accent: "#7a9e6e",
    light: "#a8c49a",
    tagBg: "#7a9e6e",
    chipBg: "rgba(120,158,110,0.15)",
    chipBorder: "rgba(120,158,110,0.3)",
    dividerBg: "linear-gradient(to right, #a8c49a, transparent)",
    dropShadow: "rgba(80,100,60,0.18)",
    corners: ["🌿", "✦", "✦", "🌿"],
  },
  blue: {
    leftBg: "linear-gradient(135deg, #e0ecf4 0%, #c8dff0 60%, #b8d4e8 100%)",
    accent: "#7a9eb8",
    light: "#b8d4e8",
    tagBg: "#7a9eb8",
    chipBg: "rgba(122,158,184,0.15)",
    chipBorder: "rgba(122,158,184,0.3)",
    dividerBg: "linear-gradient(to right, #b8d4e8, transparent)",
    dropShadow: "rgba(60,80,120,0.18)",
    corners: ["🕊️", "✦", "✦", "🕊️"],
  },
  lavender: {
    leftBg: "linear-gradient(135deg, #ede8f4 0%, #ddd0f0 60%, #ccc0e4 100%)",
    accent: "#9e8ab8",
    light: "#c8b8d8",
    tagBg: "#9e8ab8",
    chipBg: "rgba(158,138,184,0.15)",
    chipBorder: "rgba(158,138,184,0.3)",
    dividerBg: "linear-gradient(to right, #c8b8d8, transparent)",
    dropShadow: "rgba(100,80,140,0.18)",
    corners: ["🌸", "✦", "✦", "🌸"],
  },
};

const navBtnStyle = {
  width: "42px", height: "42px",
  borderRadius: "50%",
  border: "1.5px solid rgba(196,151,90,0.4)",
  backgroundColor: "rgba(253,246,236,0.9)",
  color: "#c4975a",
  fontSize: "20px",
  cursor: "pointer",
  display: "flex", alignItems: "center", justifyContent: "center",
  boxShadow: "0 2px 8px rgba(100,70,40,0.1)",
  textDecoration: "none",
  transition: "all 0.2s ease",
  flexShrink: 0,
};

export default function PsitaBook({ name, nickname, color, image, isMemorial, age, personality, favorites, description, prev, next }) {
  const c = colorConfig[color];

  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#fdf6ec",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "100px 20px 60px",
      backgroundImage: "radial-gradient(ellipse at 10% 20%, rgba(180,220,160,0.08) 0%, transparent 50%), radial-gradient(ellipse at 90% 80%, rgba(230,180,120,0.1) 0%, transparent 50%)",
    }}>

      {/* Book + setas */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px", width: "min(940px, 100%)" }}>

        {/* Seta esquerda */}
        {prev ? (
          <Link href={prev.href} style={navBtnStyle} title={prev.name}>‹</Link>
        ) : (
          <div style={{ width: "42px", flexShrink: 0 }} />
        )}

      {/* Book */}
      <div style={{
        flex: 1,
        display: "flex",
        width: "min(860px, 100%)",
        minHeight: "540px",
        borderRadius: "4px 16px 16px 4px",
        boxShadow: "-6px 0 0 #c9a87a, 0 20px 60px rgba(80,50,20,0.22), 0 4px 12px rgba(80,50,20,0.12)",
        overflow: "hidden",
      }}>

        {/* LEFT — ilustração */}
        <div style={{
          flex: 1,
          background: c.leftBg,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 30px",
          position: "relative",
          borderRight: "2px solid rgba(140,100,60,0.12)",
        }}>
          {/* Blob de luz */}
          <div style={{
            position: "absolute",
            width: "280px", height: "280px",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.45) 0%, transparent 70%)",
            borderRadius: "60% 40% 55% 45%",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
          }} />

          {/* Cantos */}
          {["tl","tr","bl","br"].map((pos, i) => (
            <span key={pos} style={{
              position: "absolute",
              fontSize: "20px",
              opacity: 0.35,
              ...(pos === "tl" && { top: "14px", left: "16px", transform: "rotate(-20deg)" }),
              ...(pos === "tr" && { top: "14px", right: "16px", transform: "rotate(20deg)" }),
              ...(pos === "bl" && { bottom: "14px", left: "16px", transform: "rotate(20deg)" }),
              ...(pos === "br" && { bottom: "14px", right: "16px", transform: "rotate(-20deg)" }),
            }}>
              {c.corners[i]}
            </span>
          ))}

          {/* In memoriam */}
          {isMemorial && (
            <div style={{
              position: "absolute", top: "20px", left: "50%", transform: "translateX(-50%)",
              fontFamily: "'Raleway', sans-serif", fontStyle: "italic", fontSize: "11px",
              color: c.accent, letterSpacing: "2px", opacity: 0.7, whiteSpace: "nowrap",
            }}>
              ✦ in memoriam ✦
            </div>
          )}

          {/* Foto */}
          <img
            src={image}
            alt={name}
            style={{
              width: "230px", maxWidth: "80%",
              position: "relative", zIndex: 1,
              filter: `drop-shadow(0 12px 20px ${c.dropShadow})${isMemorial ? " grayscale(0.3)" : ""}`,
              opacity: isMemorial ? 0.88 : 1,
              animation: "psita-float 4s ease-in-out infinite alternate",
            }}
          />

          {isMemorial && (
            <div style={{ position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)", fontSize: "13px", opacity: 0.4, color: c.accent, letterSpacing: "4px" }}>
              ✦ &nbsp; ✦ &nbsp; ✦
            </div>
          )}
        </div>

        {/* RIGHT — ficha */}
        <div style={{
          flex: 1.1,
          backgroundColor: "#f5ead8",
          borderRadius: "0 16px 16px 0",
          padding: "44px 44px 36px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          position: "relative",
          backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, rgba(180,150,110,0.12) 31px, rgba(180,150,110,0.12) 32px)",
          backgroundSize: "100% 32px",
          backgroundPosition: "0 52px",
        }}>

          {/* Margem esquerda */}
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: "18px",
            background: "linear-gradient(to right, rgba(120,80,40,0.08), transparent)",
            pointerEvents: "none",
          }} />

          {/* Nome */}
          <div>
            <span style={{
              display: "inline-block",
              backgroundColor: c.tagBg,
              color: "#fff",
              fontFamily: "'Raleway', sans-serif",
              fontStyle: "italic",
              fontSize: "11px",
              padding: "3px 12px",
              borderRadius: "999px",
              letterSpacing: "1px",
              marginBottom: "6px",
              opacity: 0.85,
            }}>
              {isMemorial ? "in memoriam • 🕊️" : "calopsita • 🐦"}
            </span>
            <div className="font-chalk" style={{ fontSize: "52px", color: "#4a3728", lineHeight: 1 }}>
              {name}
            </div>
            <div style={{ fontFamily: "'Raleway', sans-serif", fontStyle: "italic", fontSize: "16px", color: "#c4975a", marginTop: "4px" }}>
              "{nickname}"
            </div>
          </div>

          {/* Divisor */}
          <div style={{ width: "60px", height: "2px", borderRadius: "2px", background: c.dividerBg }} />

          {/* Infos */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <InfoRow label="idade" c={c}>
              <span style={{ fontSize: "14px", color: "#4a3728", lineHeight: 1.6 }}>{age}</span>
            </InfoRow>

            <InfoRow label="personalidade" c={c}>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {personality.map(p => (
                  <span key={p} style={{
                    fontSize: "12px", padding: "3px 10px", borderRadius: "999px",
                    fontStyle: "italic", fontFamily: "'Raleway', sans-serif",
                    backgroundColor: c.chipBg, border: `1px solid ${c.chipBorder}`, color: c.accent,
                  }}>{p}</span>
                ))}
              </div>
            </InfoRow>

            <InfoRow label="favoritos" c={c}>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {favorites.map(f => (
                  <span key={f} style={{
                    fontSize: "12px", padding: "3px 10px", borderRadius: "999px",
                    fontFamily: "'Raleway', sans-serif",
                    backgroundColor: "rgba(196,151,90,0.12)", border: "1px solid rgba(196,151,90,0.25)", color: "#8b6340",
                  }}>{f}</span>
                ))}
              </div>
            </InfoRow>
          </div>

          {/* Descrição */}
          <p style={{
            fontSize: "13px", color: "#4a3728", lineHeight: 1.8,
            opacity: 0.72, fontStyle: "italic", fontFamily: "'Raleway', sans-serif",
            paddingLeft: "12px", marginTop: "2px",
            borderLeft: `2px solid ${c.light}`,
          }}>
            {description}
          </p>

          {/* Floreio */}
          <div style={{ textAlign: "right", fontSize: "18px", opacity: 0.18, color: "#8b6340", marginTop: "auto" }}>
            ✦ ✦ ✦
          </div>

        </div>
      </div>

        {/* Seta direita */}
        {next ? (
          <Link href={next.href} style={navBtnStyle} title={next.name}>›</Link>
        ) : (
          <div style={{ width: "42px", flexShrink: 0 }} />
        )}

      </div>
    </main>
  );
}

function InfoRow({ label, children }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
      <span style={{
        fontFamily: "'Raleway', sans-serif", fontStyle: "italic", fontSize: "12px",
        color: "#c4975a", letterSpacing: "1px", minWidth: "90px", paddingTop: "2px",
      }}>
        {label}
      </span>
      {children}
    </div>
  );
}
