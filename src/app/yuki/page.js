import PsitaBook from "@/components/PsitaBook";

export default function Yuki() {
  return (
    <PsitaBook
      name="Yuki"
      nickname="Pupuki · Yukito"
      color="lavender"
      image="/yuki-portrait.png"
      isMemorial={false}
      age="1 ano"
      personality={["arteiro", "cantor", "bravo"]}
      favorites={["🍿 pipoca"]}
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula purus nec felis facilisis, vel tincidunt arcu dignissim. Pellentesque habitant morbi tristique senectus et malesuada fames ac turpis egestas."
      prev={{ href: "/theo", name: "Theo" }}
    />
  );
}
