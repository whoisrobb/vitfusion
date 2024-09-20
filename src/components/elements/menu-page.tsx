import { useMenuStore } from "@/store/menu-open-store"
import { motion, AnimatePresence } from "framer-motion"
import MenuToggle from "./menu-toggle/menu-toggle"
import Logo from "./logo"
import { Link } from "react-router-dom";

const variants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0,
        transition: {
            delay: 0.9
        }
    }
};

const linkVariants = {
    initial: {
        y: '200%',
    },
    animate: {
        y: 0,
        transition: {
            duration: '0.7',
            ease: "linear"
        }
    },
    exit: {
        y: '-200%',
        transition: {
            duration: '0.7',
            ease: "linear"
        }
    }
}

const mainLinks = [
    { title: "about", href: "/about" },
    { title: "services", href: "/services" },
    { title: "contact", href: "/contact" },
];

const partnerLinks = [
    { title: "Everything is positive", href: "https://eispositive.com" },
    { title: "Automated intelligence", href: "https://automatedi.com/" },
    { title: "iCre8 content", href: "https://icre8content.com/" },
];

const socialLinks = [
    { title: "X", href: "#" },
    { title: "Linkedin", href: "#" },
    { title: "Facebook", href: "#" },
    { title: "Youtube", href: "#" },
    { title: "Instagram", href: "#" },
];

const MenuPage = () => {
    const { menuOpen, toggleMenu } = useMenuStore((state) => state)
  return (
    <AnimatePresence mode="wait">
        {menuOpen &&
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-0 left-0 w-full h-screen bg-background z-[1000] px-8 py-2 flex flex-col"
        >
            <div className="flex h-24 justify-between items-center">
                <Logo className="w-40" />

                <div className="">
                    <MenuToggle open={menuOpen} setOpen={toggleMenu} />
                </div>
            </div>

            <div className="flex h-[80%] w-[80%] md:flex-row flex-col self-center">
                <div className="w-full h-full flex flex-col justify-between">
                    <ul className="leading-tight">
                        {mainLinks.map((link) => (
                            <div
                                className="overflow-hidden"
                                key={link.title}
                            >
                                <motion.li
                                    variants={linkVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    onClick={() => toggleMenu()}
                                >
                                    <Link
                                        to={link.href}
                                        className="uppercase text-7xl font-extrabold text-muted-foreground hover:underline hover:text-primary"
                                    >
                                        {link.title}
                                    </Link>
                                </motion.li>
                            </div>
                        ))}
                    </ul>
                
                    <ul className="leading-tight">
                        {partnerLinks.map((link) => (
                            <div
                                className="overflow-hidden"
                                key={link.title}
                            >
                                <motion.li
                                    variants={linkVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                >
                                    <Link
                                        to={link.href}
                                        className="text-xl text-muted-foreground hover:underline hover:text-primary"
                                        target="_blank"
                                    >
                                        {link.title}
                                    </Link>
                                </motion.li>
                            </div>
                        ))}
                    </ul>
                </div>

                <div className="w-full md:h-full h-[40%]  flex justify-end">
                    <ul className="leading-tight text-right self-end">
                        {socialLinks.map((link) => (
                            <div
                                className="overflow-hidden"
                                key={link.title}
                            >
                                <motion.li
                                    variants={linkVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                >
                                    <Link
                                        to={link.href}
                                        className="text-xl text-muted-foreground hover:underline hover:text-primary"
                                        target="_blank"
                                    >
                                        {link.title}
                                    </Link>
                                </motion.li>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>}
    </AnimatePresence>
  )
}

export default MenuPage
