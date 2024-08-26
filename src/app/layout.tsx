import { Outlet } from "react-router-dom"
import Header from "../components/elements/header"
import SiteShell from "../components/shells/site-shell"

const Layout = () => {
  return (
    <div>
        <Header />

        <SiteShell
            className="py-20"
        >
            <Outlet />
        </SiteShell>
    </div>
  )
}

export default Layout
