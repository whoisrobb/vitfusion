import { ArrowRightIcon } from "@radix-ui/react-icons"
import DotPattern from "../../components/magicui/dot-pattern"
import WordPullUp from "../../components/magicui/word-pull-up"
import { Button } from "../../components/ui/button"
import { cn } from "../../lib/utils"
import { Badge } from "../../components/ui/badge"

const Home = () => {
  return (
    <div className="relative grid h-[calc(100vh-5rem)] w-full place-items-center overflow-hidden rounded-lg">
        <DotPattern
            className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            )}
        />

        <div className="flex flex-col justify-center items-center gap-8">
            <div className="flex flex-col justify-center items-center">
                <Badge
                    className="rounded-full"
                    variant={"secondary"}
                >
                    <span>✨ Pioneering solutions</span>
                    <ArrowRightIcon
                        className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                    />
                </Badge>
                <WordPullUp
                    className="text-center md:text-7xl text-5xl font-bold font-grotesk bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent"
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
    </div>
  )
}

export default Home
