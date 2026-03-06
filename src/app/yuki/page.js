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
      description="Yuki é o que veio por último. Esse bichinho é muito arteiro e encrenqueiro, bate no coitado do Theo e quem for. Ele arranca a sua mão e depois pede carinho. Ele banca de esperto, mas é um bobão que não tem senso de direção ainda. Seu nome provisório foi Papa-Léguas, porque ele corre muito rápido de qualquer pessoa que se aproxima, ele foi difícil de conquistar. Ele é do tipo “olha, mas não me toca!”."
      prev={{ href: "/theo", name: "Theo" }}
    />
  );
}
