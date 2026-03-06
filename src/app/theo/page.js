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
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula purus nec felis facilisis, vel tincidunt arcu dignissim. Pellentesque habitant morbi tristique senectus et malesuada fames ac turpis egestas."
      prev={{ href: "/jujuba", name: "Jujuba" }}
      next={{ href: "/yuki", name: "Yuki" }}
    />
  );
}
