import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="fixed left-1/2 -translate-x-1/2 w-[90%] max-w-[1000px] h-[60px] flex justify-center items-center z-[9999] font-roboto rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.18)] border-none"
      style={{ backgroundColor: "#ffffff", top: "15px" }} // Branco sólido garantido
    >
      
      {/* Container dos links com espaçamento */}
      <div className="flex items-center justify-center text-base font-medium">
        <Link href="/" style={{ margin: "0 20px" }} className="text-gray-700 hover:text-gray-900 transition-colors">
          Início
        </Link>
        <Link href="/gerador" style={{ margin: "0 20px" }} className="text-gray-700 hover:text-gray-900 transition-colors">
          Gerador
        </Link>
        <Link href="/sobre" style={{ margin: "0 20px" }} className="text-gray-700 hover:text-gray-900 transition-colors">
          Sobre
        </Link>
      </div>
    </nav>
  );
}