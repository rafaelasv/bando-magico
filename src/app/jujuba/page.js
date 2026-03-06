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
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula purus nec felis facilisis, vel tincidunt arcu dignissim. Pellentesque habitant morbi tristique senectus et malesuada fames ac turpis egestas."
      next={{ href: "/theo", name: "Theo" }}
    />
  );
}
