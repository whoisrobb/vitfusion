import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { cn } from "../../lib/utils";
import { NavMenu } from "./nav-menu";

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
            className={cn("font-sans capitalize font-bold", buttonVariants({ variant: "linkHover2" }))}
        >
            About Us
        </Link>

        <NavMenu />
        
        <Link
            to={'/contact'}
            className={cn("font-sans capitalize font-bold", buttonVariants({ variant: "linkHover2" }))}
        >
            Contact Us
        </Link>
    </div>
  )
}

export default DesktopNav