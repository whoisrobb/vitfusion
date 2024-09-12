import useSplitPara from "@/hooks/useSplitPara";
import { useRef } from "react";
import Video from "./video";
import { Separator } from "@/components/ui/separator";

const text = "We empower industries and communities by delivering adaptable, AI-driven solutions with meaningful impact. By staying agnostic to the rapid evolution of technology, our offerings remain relevant, powerful, and aligned with client needs."

const Mission = () => {
    const container = useRef(null);
    const paragraph = useSplitPara(text, container);
    return (
        <>
        <div className="grid md:grid-cols-3 grid-cols-1 py-8">
            <h1 className="col-span-2 capitalize md:text-4xl text-2xl font-bold">Our mission</h1>
            <p
                className="flex flex-wrap gap-x-1"
                ref={container}
            >
                {paragraph}
            </p>
        </div>
        
        
        <Video />
        <Separator />
        </>
    )
}
  
export default Mission
