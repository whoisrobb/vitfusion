import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

type FlipLinkProps = HTMLAttributes<HTMLDivElement> & {
  children: string;
  href: string;
  hover?: boolean;
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href, className, hover }: FlipLinkProps) => {
    return (
      <motion.a
        initial="initial"
        whileHover="hovered"
        animate={hover ? "hovered": "initial"}
        href={href}
        className={cn("relative overflow-hidden", className)}
        style={{
          lineHeight: 0.75,
        }}
      >
        <div>
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0">
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.a>
    );
};

export default FlipLink;