import PsitaBook from "@/components/PsitaBook";

export default function Theo() {
  return (
    <PsitaBook
      name="Theo"
      nickname="Sapinho"
      color="green"
      image="/theo-portrait.png"
      isMemorial={false}
      age="7 anos"
      personality={["carinhoso", "manhoso"]}
      favorites={["🍿 pipoca", "🌻 girassol"]}
      description="Theo é o veterano da casa e o mais manhoso de todos. Não tem ninguém que o veja e não deseje levá-lo para casa, porque ele é muito manso e extremamente dócil. Ele se acostumou muito com os humanos, e infelizmente não se interessa por ter uma parceira, mas ele tem toda uma companhia. Ele possui uma memória de 5KB e não aprende mais músicas novas, o que é uma pena! Literalmente pena..."
      prev={{ href: "/jujuba", name: "Jujuba" }}
      next={{ href: "/yuki", name: "Yuki" }}
    />
  );
}
