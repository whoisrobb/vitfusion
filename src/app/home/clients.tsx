import { ClientsOrbit } from "../../components/elements/clients-orbit"
import ContentShell from "../../components/shells/content-shell"

const Clients = () => {
  return (
    <ContentShell
        title="Some of our clients"
    >
        <div className="my-12">
            <ClientsOrbit />
        </div>
    </ContentShell>
  )
}

export default Clients
