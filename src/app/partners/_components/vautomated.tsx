import useSplitPara from "@/hooks/useSplitPara";
import { useRef } from "react";
import AnimSeparator from "@/components/animations/anim-separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const text = "Partnering with VAutomated allows us to bring advanced automation to both residential and commercial spaces. By redefining interactions with technology, we’re making everyday environments smarter, more intuitive, and highly efficient."

const Vautomated = () => {
    const container = useRef(null);
    const paragraph = useSplitPara(text, container);
    return (
        <>
        <AnimSeparator />

        <div className="grid md:grid-cols-3 grid-cols-1 py-8">
            <h1 className="col-span-2 capitalize md:text-4xl text-2xl font-bold">VAutomated</h1>
            <div className="space-y-4">
                <p
                    className="flex flex-wrap gap-x-1"
                    ref={container}
                >
                    {paragraph}
                </p>

                <Link
                    to={''}
                    target="_blank"
                >
                    <Button variant={"linkHover1"}>Learn more</Button>
                </Link>
            </div>
        </div>
        </>
    )
}
  
export default Vautomated
