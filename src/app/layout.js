import { Roboto_Slab } from "next/font/google"; 
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

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${chalkiez.variable} ${robotoSlab.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}