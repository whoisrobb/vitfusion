import useSplitPara from "@/hooks/useSplitPara";
import { useRef } from "react";

const headline = "Empowering Industries and Communities Through the Internet of Value"
const subheadline = "Revolutionizing the Future with AI-Driven Value Solutions"

const Banner = () => {
    const container = useRef(null);
    const header = useSplitPara(headline, container);
    const paragraph = useSplitPara(subheadline, container);
    
  return (
    <div ref={container} className="h-[70vh] flex items-end space-y-8 md:justify-between justify-center md:flex-row flex-col p-2">
        <div className="text-muted-foreground">
            <p className="flex flex-wrap gap-x-1 md:w-full w-[80%] float-right">
                {/* Revolutionizing the Future with AI-Driven Value Solutions */}
                {paragraph}
            </p>
        </div>
        <div className="lg:w-[60%] w-[80%]">
            <h1 className="uppercase lg:text-6xl md:text-5xl text-4xl font-bold flex flex-wrap gap-x-4 text-white justify-end text-right">
                {/* Empowering Industries and Communities Through the Internet of Value (IoV) */}
                {header}
            </h1>
        </div>
    </div>
  )
}

export default Banner
