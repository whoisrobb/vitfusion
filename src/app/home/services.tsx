import ServicesBento from "../../components/elements/bento-grid"
import ContentShell from "../../components/shells/content-shell"

const Services = () => {
  return (
    <ContentShell
      title="What we offer"
      subtitle="We take your Vision, make it Intelligent, Interact with Technology and then Fuse it all together."
    >
      <div className="my-12">
        <ServicesBento />
      </div>
    </ContentShell>
  )
}

export default Services
