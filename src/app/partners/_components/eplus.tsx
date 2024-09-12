import useSplitPara from "@/hooks/useSplitPara";
import { useRef } from "react";
import AnimSeparator from "@/components/animations/anim-separator";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const text = "Our partnership with E+ is more than a collaboration—it’s a shared vision to empower the next generation. Together, we support programs like E+ Kids, which inspires young minds to embrace technology and positive growth. By providing tools and fostering the right mindset, we are shaping future leaders in the world of technology."

const Eplus = () => {
    const container = useRef(null);
    const paragraph = useSplitPara(text, container);
    return (
        <>
        <AnimSeparator />

        <div className="grid md:grid-cols-3 grid-cols-1 py-8">
            <h1 className="col-span-2 capitalize md:text-4xl text-2xl font-bold">Everything is Positive</h1>
            <div className="space-y-4">
                <p
                    className="flex flex-wrap gap-x-1"
                    ref={container}
                >
                    {paragraph}
                </p>

                <Link
                    to={'https://eispositive.com'}
                    target="_blank"
                >
                    <Button variant={"linkHover1"}>Learn more</Button>
                </Link>
            </div>
        </div>
        </>
    )
}
  
export default Eplus
