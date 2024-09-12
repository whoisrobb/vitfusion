import useSplitPara from "@/hooks/useSplitPara";
import { useRef } from "react";
import ImageGrid from "./image-grid";
import { Separator } from "@/components/ui/separator";

const text = "To lead the transformation toward a technology ecosystem that prioritizes value over volume. We pioneer solutions that integrate AI, data analytics, and IoV, enhancing the quality of life for people, businesses, and communities."

const Vision = () => {
    const container = useRef(null);
    const paragraph = useSplitPara(text, container);
    return (
        <>
        <div className="grid md:grid-cols-3 grid-cols-1 py-8">
            <h1 className="col-span-2 capitalize md:text-4xl text-2xl font-bold">Our vision</h1>
            <p
                className="flex flex-wrap gap-x-1"
                ref={container}
            >
                {paragraph}
            </p>
        </div>

        <ImageGrid />
        <Separator />
        </>
    )
}
  
export default Vision
