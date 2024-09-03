import { Outlet } from "react-router-dom"
import Header from "../components/elements/header"
import SiteShell from "../components/shells/site-shell"
import Footer from "@/components/elements/footer"

const Layout = () => {
  return (
    <div className="font-sans">
      <Header />

      <SiteShell
        className="py-20"
      >
        <Outlet />
      </SiteShell>

      <Footer />
    </div>
  )
}

export default Layout
