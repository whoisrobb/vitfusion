import { MagicCard } from "@/components/magicui/magic-card";
import ContentShell from "@/components/shells/content-shell";
import data from "./_components/advantages.json";

const Advantages = () => {
  return (
    <ContentShell
      title="Why choose us?"
      subtitle="We Deliver Unmatched Innovation and Expertise"
    >
      <div className="my-12 space-y-4">
        <p className="lg:w-[50%] text-muted-foreground">
            Our commitment to excellence sets us apart. We provide tailored, future-ready solutions designed to meet your unique needs.
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            {data.map((card) => (
            <MagicCard
                className="cursor-pointer flex-col justify-end aspect-[4/3] shadow-md p-4 space-y-2"
                gradientColor={"#D9D9D955"}
                key={card.description}
                // gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            >
                <h1 className="font-bold font-grotesk text-lg">{card.title}</h1>
                <p className="leading-tight text-muted-foreground">{card.description}</p>
            </MagicCard>))}
        </div>
      </div>
    </ContentShell>
  )
}

export default Advantages
