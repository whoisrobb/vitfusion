import { Button } from "@/components/ui/button"

const Banner = () => {
  return (
    <div className="">
      <div className="bg-background">
        <div className="w-full md:h-[60vh] h-[25vh] lg:w-[70%] flex flex-col items-start justify-center gap-4">
            <p className=" md:text-4xl text-2xl font-bold ">
                Revolutionizing industries with AI-driven solutions. Empowering communities through the Internet of Value.
            </p>

            <Button variant={"linkHover1"}>Let's connect</Button>
        </div>
      </div>
      <div className="md:h-screen h-[50vh]" />
    </div>
  )
}

export default Banner
