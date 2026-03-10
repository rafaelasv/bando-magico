"use client";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        backgroundColor: "#F9E29C",
        border: "none",
        borderRadius: "50%",
        width: "44px",
        height: "44px",
        cursor: "pointer",
        fontSize: "18px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.2s",
        zIndex: 999,
      }}
      aria-label="Voltar ao topo"
    >
      ↑
    </button>
  );
}
