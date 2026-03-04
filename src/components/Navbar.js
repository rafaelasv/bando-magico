import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 w-[90%] max-w-[1000px] h-[48px] flex justify-center items-center z-[9999] font-roboto rounded-full shadow-md bg-amarelo-psita/80 backdrop-blur-sm border border-amarelo-psita" style={{ top: "16px" }}>
      <div className="flex items-center justify-center text-base font-medium">
        <Link href="/" style={{ margin: "0 20px" }} className="text-grafite-lapis hover:text-coral-bochecha transition-colors duration-200">
          Início
        </Link>
        <Link href="/gerador" style={{ margin: "0 20px" }} className="text-grafite-lapis hover:text-coral-bochecha transition-colors duration-200">
          Gerador
        </Link>
        <Link href="/sobre" style={{ margin: "0 20px" }} className="text-grafite-lapis hover:text-coral-bochecha transition-colors duration-200">
          Sobre
        </Link>
      </div>
    </nav>
  );
}
