import useSplitPara from "@/hooks/useSplitPara";
import { useRef } from "react";
import AnimSeparator from "@/components/animations/anim-separator";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const text = "Through our collaboration with AI, we enhance our platform’s capabilities by delivering innovative software and hardware solutions. These advancements boost productivity, streamline operations, and set new standards for business success."

const AutoAi = () => {
    const container = useRef(null);
    const paragraph = useSplitPara(text, container);
    return (
        <>
        <AnimSeparator />

        <div className="grid md:grid-cols-3 grid-cols-1 py-8">
            <h1 className="col-span-2 capitalize md:text-4xl text-2xl font-bold">Automated AI</h1>
            <div className="space-y-4">
                <p
                    className="flex flex-wrap gap-x-1"
                    ref={container}
                >
                    {paragraph}
                </p>

                <Link
                    to={'https://automatedi.com'}
                    target="_blank"
                >
                    <Button variant={"linkHover1"}>Learn more</Button>
                </Link>
            </div>
        </div>
        </>
    )
}
  
export default AutoAi
