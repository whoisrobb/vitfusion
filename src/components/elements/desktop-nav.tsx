import { pages } from "../../config/pages";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { cn } from "../../lib/utils";


const DesktopNav = () => {
  return (
    <div className="md:flex items-center hidden">
        {pages.map((page) => (
            <Link
                to={page.href}
                key={page.title}
                className={cn("font-sans capitalize font-bold", buttonVariants({ variant: "linkHover2" }))}
            >
                {page.title}
            </Link>
        ))}
    </div>
  )
}

export default DesktopNav