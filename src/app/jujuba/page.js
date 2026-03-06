import PsitaBook from "@/components/PsitaBook";

export default function Jujuba() {
  return (
    <PsitaBook
      name="Jujuba"
      nickname="Jujubita"
      color="blue"
      image="/jujuba-portrait.png"
      isMemorial={true}
      age="1 ano e alguns meses"
      personality={["brincalhão", "cantor", "arteiro"]}
      favorites={["🍿 pipoca", "✨ tudo que aparecia"]}
      description="O querido Jujuba foi quem apresentou o mundo das calopsitas para a criadora do site. Ele era muito inteligente, andava e voava atrás pela casa e a chamava, eram melhores amigos. Ele aprendeu a imitar sirene de polícia sozinho e compôs várias canções originais. Extremamente talentoso, companheiro, brincalhão. Jujuba vive no céu há 5 anos, esperando reencontrar sua melhor amiga um dia."
      next={{ href: "/theo", name: "Theo" }}
    />
  );
}
