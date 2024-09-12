import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { cn } from "../../lib/utils";
import FlipLink from "../animations/flip-link";

export const pages = [
    {
        "title": "About Us",
        "href": "/about"
    },
    {
        "title": "Contact Us",
        "href": "/contact"
    }
]

const DesktopNav = () => {
  return (
    <div className="md:flex items-center hidden">
        <Link
            to={'/about'}
            className={cn("font-sans capitalize font-bold text-muted-foreground hover:text-primary", buttonVariants({ variant: "linkHover2" }))}
        >
            <FlipLink href="/about">About</FlipLink>
        </Link>

        {/* <NavMenu /> */}
        <Link
            to={'#'}
            className={cn("font-sans capitalize font-bold text-muted-foreground hover:text-primary", buttonVariants({ variant: "linkHover2" }))}
        >
            <FlipLink href="/about">services</FlipLink>
        </Link>
        
        <Link
            to={'/partners'}
            className={cn("font-sans capitalize font-bold text-muted-foreground hover:text-primary", buttonVariants({ variant: "linkHover2" }))}
        >
            <FlipLink href="/about">Partners</FlipLink>
        </Link>
        
        {/* <Link
            to={'/contact'}
            className={cn("font-sans capitalize font-bold text-muted-foreground hover:text-primary", buttonVariants({ variant: "linkHover2" }))}
        >
            <FlipLink href="/contact">Contact</FlipLink>
        </Link> */}
    </div>
  )
}

export default DesktopNav