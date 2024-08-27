import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type ContentShellProps = HTMLAttributes<HTMLDivElement> & {
    title: string;
    subtitle?: string;
    children: ReactNode;
};

const variants = {
    duration: 0.5,
    delayMultiple: 0.04,
    framerProps: {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    },
}

const wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
}

const ContentShell = ({ title, subtitle, children, className }: ContentShellProps) => {
  return (
    <div
        className={cn('py-12', className)}
    >
        <div className="text-center w-full">            
            <div className="flex justify-center font-grotesk font-bold uppercase text-5xl">
                <AnimatePresence>
                    {title.split("").map((char, i) => (
                        <motion.h1
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            exit="hidden"
                            variants={variants.framerProps}
                            transition={{ duration: variants.duration, delay: i * variants.delayMultiple }}
                            className={cn("drop-shadow-sm ", className)}
                        >
                            {char === " " ? <span>&nbsp;</span> : char}
                        </motion.h1>
                    ))}
                </AnimatePresence>
            </div>
            
            <motion.h1
                variants={wrapperFramerProps}
                initial="hidden"
                whileInView="show"
                transition={{ duration: 0.2 }}
                className={"font-display text-muted-foreground text-center tracking-[-0.02em] drop-shadow-sm"}
            >
                {subtitle?.split(" ").map((word, i) => (
                    <motion.span
                        key={i}
                        variants={framerProps}
                        style={{ display: "inline-block", paddingRight: "4px" }}
                    >
                        {word === "" ? <span>&nbsp;</span> : word}
                    </motion.span>
                ))}
            </motion.h1>
        </div>
        {children}
    </div>
  )
}

export default ContentShell