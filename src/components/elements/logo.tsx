import { HTMLAttributes } from "react"
import { Link } from "react-router-dom"
import { cn } from "../../lib/utils";

const Logo = ({ className }: HTMLAttributes<HTMLDivElement>) => {
  const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link
        to={'/'}
        onClick={handleScrollToTop}
    >
        <img
            src="/images/vitfusion-logo.png"
            className={cn("", className)}
        />
    </Link>
  )
}

export default Logo