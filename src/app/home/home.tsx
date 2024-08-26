import { ArrowRightIcon } from "@radix-ui/react-icons"
import DotPattern from "../../components/magicui/dot-pattern"
import WordPullUp from "../../components/magicui/word-pull-up"
import { Button } from "../../components/ui/button"
import { cn } from "../../lib/utils"

const Home = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg space-y-4">
        <DotPattern
            className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            )}
        />

        <div className="">
            <WordPullUp
                className="text-center text-7xl font-bold font-grotesk bg-gradient-to-br from-foreground to-acc-two bg-clip-text text-transparent"
                words="Fusing Technology and Innovation for Smart Solutions"
            />

            <p className="font-sans text-lg text-center text-muted-foreground">
                Discover cutting-edge solutions that seamlessly integrate technology and innovation to transform your business.
            </p>
        </div>

        <Button
                variant="expandIcon"
                Icon={ArrowRightIcon}
                iconPlacement="right"
                className="rounded bg-acc-one text-background font-grotesk hover:bg-acc-two font-bold"
            >
                Get Started
        </Button>
    </div>
  )
}

export default Home
