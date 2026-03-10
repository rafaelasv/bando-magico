"use client";
import { useState } from "react";

const FRAMES = {
  idle:      { pos: "0%",      msg: "clique em mim!" },
  happy:     { pos: "33.33%",  msg: "♪ ♫ ♪" },
  surprised: { pos: "66.66%",  msg: "!" },
  ruffled:   { pos: "100%",    msg: "zzz..." },
};

export default function PsitaGame() {
  const [frame, setFrame] = useState("idle");
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    const next = clicks + 1;
    setClicks(next);

    if (next >= 5) {
      setFrame("ruffled");
      setTimeout(() => { setFrame("idle"); setClicks(0); }, 2000);
    } else {
      setFrame("happy");
      setTimeout(() => setFrame("idle"), 700);
    }
  };

  const handleMouseEnter = () => {
    if (frame === "idle") setFrame("surprised");
  };

  const handleMouseLeave = () => {
    if (frame === "surprised") setFrame("idle");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
      <div
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "180px",
          height: "180px",
          backgroundImage: "url('/sprite.png')",
          backgroundSize: "400% 100%",
          backgroundPosition: `${FRAMES[frame].pos} center`,
          backgroundRepeat: "no-repeat",
          cursor: "pointer",
          transition: "background-position 0.05s",
        }}
      />
      <p style={{
        fontFamily: "'Raleway', sans-serif",
        fontSize: "14px",
        color: "#B0A99F",
        minHeight: "20px",
        transition: "opacity 0.2s",
      }}>
        {FRAMES[frame].msg}
      </p>
    </div>
  );
}
