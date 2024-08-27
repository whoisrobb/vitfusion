import { BentoCard, BentoGrid } from "../magicui/bento-grid";
import { FileTextIcon, BellIcon, Share2Icon, VideoIcon, CameraIcon } from '@radix-ui/react-icons';

const features = [
  {
    Icon: FileTextIcon,
    name: "Content Creation",
    description: "Tailored content that enhances brand engagement.",
    href: "/services/content-creation",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <img className="absolute -right-20 -top-20 opacity-60" src="path-to-image" alt="Content Creation" />
  },
  {
    Icon: BellIcon,
    name: "Internet of Things (IoT)",
    description: "Smart IoT solutions for efficient operations.",
    href: "/services/iot",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: <img className="absolute -right-20 -top-20 opacity-60" src="path-to-image" alt="IoT" />
  },
  {
    Icon: Share2Icon,
    name: "Smart City Integration",
    description: "Advanced technologies for intelligent urban infrastructure.",
    href: "/services/smart-city-integration",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <img className="absolute -right-20 -top-20 opacity-60" src="path-to-image" alt="Smart City Integration" />
  },
  {
    Icon: VideoIcon,
    name: "Streaming Services",
    description: "Reliable platforms for seamless content streaming.",
    href: "/services/streaming-services",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <img className="absolute -right-20 -top-20 opacity-60" src="path-to-image" alt="Streaming Services" />
  },
  {
    Icon: CameraIcon,
    name: "Venue Videos",
    description: "Professional video solutions for events and venues.",
    href: "/services/venue-videos",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <img className="absolute -right-20 -top-20 opacity-60" src="path-to-image" alt="Venue Videos" />
  },
];


const ServicesBento = () => {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}

export default ServicesBento