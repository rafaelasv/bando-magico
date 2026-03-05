"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "INÍCIO" },
    { href: "/gerador", label: "GERADOR" },
    { href: "/sobre", label: "SOBRE" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[9999]">

      {/* Barra principal */}
      <nav className="w-full font-raleway flex justify-center items-center h-[56px]" style={{ backgroundColor: "#F9E29C" }}>
        <div className="flex items-center justify-center">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                style={{ margin: "0 20px", fontSize: "13px", fontWeight: "700" }}
                className={`pb-1 transition-colors duration-200 ${
                  isActive
                    ? "text-grafite-lapis border-b-2 border-grafite-lapis"
                    : "text-grafite-lapis hover:text-coral-bochecha"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Borda inferior em escalopos (nuvem invertida) */}
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "40px", display: "block" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 L1200,0 L1200,3 Q1185,22 1170,3 Q1155,22 1140,3 Q1125,22 1110,3 Q1095,22 1080,3 Q1065,22 1050,3 Q1035,22 1020,3 Q1005,22 990,3 Q975,22 960,3 Q945,22 930,3 Q915,22 900,3 Q885,22 870,3 Q855,22 840,3 Q825,22 810,3 Q795,22 780,3 Q765,22 750,3 Q735,22 720,3 Q705,22 690,3 Q675,22 660,3 Q645,22 630,3 Q615,22 600,3 Q585,22 570,3 Q555,22 540,3 Q525,22 510,3 Q495,22 480,3 Q465,22 450,3 Q435,22 420,3 Q405,22 390,3 Q375,22 360,3 Q345,22 330,3 Q315,22 300,3 Q285,22 270,3 Q255,22 240,3 Q225,22 210,3 Q195,22 180,3 Q165,22 150,3 Q135,22 120,3 Q105,22 90,3 Q75,22 60,3 Q45,22 30,3 Q15,22 0,3 Z"
          fill="#F9E29C"
        />
      </svg>

    </div>
  );
}
