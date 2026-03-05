import { Roboto_Slab, Nunito } from "next/font/google";
import localFont from "next/font/local"; 
import "./globals.css";
import Navbar from "@/components/Navbar";

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
        {children}
      </body>
    </html>
  );
}