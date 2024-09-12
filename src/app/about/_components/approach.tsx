import useSplitPara from "@/hooks/useSplitPara";
import { useRef } from "react";
import { Separator } from "@/components/ui/separator";

const text = "VITF creates solutions that cross-pollinate intelligent data, leveraging a unique push/pull model to maximize client value. Our platform, built on robust Intellectual Property (IP), drives innovation across multiple industries."

const Approach = () => {
    const container = useRef(null);
    const paragraph = useSplitPara(text, container);
    return (
        <>
        <div className="grid md:grid-cols-3 grid-cols-1 py-8">
            <h1 className="col-span-2 capitalize md:text-4xl text-2xl font-bold">Our Approach</h1>
            <p
                className="flex flex-wrap gap-x-1"
                ref={container}
            >
                {paragraph}
            </p>
        </div>

        <Separator />
        </>
    )
}

export default Approach