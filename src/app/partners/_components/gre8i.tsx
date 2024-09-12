import useSplitPara from "@/hooks/useSplitPara";
import { useRef } from "react";
import AnimSeparator from "@/components/animations/anim-separator";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const text = "The integration of Gre8i’s all-in-one intelligence platform seamlessly complements our offerings. This partnership delivers powerful data-driven insights to businesses, helping them streamline operations and generate actionable leads."

const Gre8i = () => {
    const container = useRef(null);
    const paragraph = useSplitPara(text, container);
    return (
        <>
        <AnimSeparator />

        <div className="grid md:grid-cols-3 grid-cols-1 py-8">
            <h1 className="col-span-2 capitalize md:text-4xl text-2xl font-bold">Great Intelligence</h1>
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
  
export default Gre8i
