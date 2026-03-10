import { Roboto_Slab, Nunito } from "next/font/google";
import localFont from "next/font/local"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";

const chalkiez = localFont({
  src: "../fonts/chalkiez-regular.ttf", 
  variable: "--font-chalkiez",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-slab",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-nunito",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${chalkiez.variable} ${robotoSlab.variable} ${nunito.variable}`}>
      <body className="antialiased">
        <Navbar />
        <BackToTop />
        {children}
        <footer style={{ backgroundColor: "#F9E29C", borderTop: "1px solid #E0DDD6" }}>
          <div className="footer-inner" style={{ maxWidth: "760px", margin: "0 auto", padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "13px", color: "#B0A99F" }}>
                Criado com muito 🧡 e bicadas
              </p>
              <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "12px", color: "#C8C3BB" }}>
                © 2026 Bando Mágico
              </p>
            </div>
            <img src="/psitas-andando.png" alt="psitas andando" style={{ width: "180px", objectFit: "contain", marginRight: "-300px" }} />
          </div>
        </footer>
      </body>
    </html>
  );
}