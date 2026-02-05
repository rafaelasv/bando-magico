import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] h-[60px] flex justify-center items-center bg-white/95 backdrop-blur-md z-[9999] font-roboto shadow-xl rounded-full border border-black/10 overflow-hidden">
      
      <div className="w-full max-w-[1440px] flex justify-between items-center px-8">
        
        {/* Esquerda: Logo */}
        <Link href="/" className="no-underline">
          <div className="text-2xl font-bold text-black cursor-pointer tracking-tight">
            O Bando
          </div>
        </Link>

        {/* Centro: Links */}
        <div className="flex gap-12 text-base font-medium">
          <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">Início</Link>
          <Link href="/gerador" className="text-gray-700 hover:text-gray-900 transition-colors">Gerador</Link>
          <Link href="/sobre" className="text-gray-700 hover:text-gray-900 transition-colors">Sobre</Link>
        </div>

        {/* Direita: Botão de Login */}
        <button className="bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-gray-800 transition-all text-sm">
          Login
        </button>
      
      </div>
    </nav>
  );
}