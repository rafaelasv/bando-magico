import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 flex justify-between items-center h-[60px] px-24 bg-white z-[9999] shadow-[0_4px_10px_rgba(0,0,0,0.3)] font-roboto">
      
      {/* Esquerda: Logo */}
      <Link href="/" className="no-underline">
        <div className="text-4xl text-black cursor-pointer font-chalk">
            <span className="mr-2">🦜</span> O Bando
        </div>
    </Link>

      {/* Direita: Links com Espaçamento (gap-10) */}
      <div className="flex gap-[30px] text-xl font-bold">
        <Link href="/">Início</Link>
        <Link href="/gerador">Gerador</Link>
        <Link href="/sobre">Sobre</Link>
      </div>
      
    </nav>
  );
}