import { Button } from "@/components/ui/button"

const Banner = () => {
  return (
    <div className="">
      <div className="bg-background">
        <div className="w-full h-[60vh] lg:w-[70%] flex flex-col items-start justify-center gap-4">
            <p className="text-4xl font-bold ">
                Revolutionizing industries with AI-driven solutions. Empowering communities through the Internet of Value.
            </p>

            <Button variant={"linkHover1"}>Let's connect</Button>
        </div>
      </div>
      <div className="h-screen" />
    </div>
  )
}

export default Banner
