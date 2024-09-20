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
    background: <img className="h-full w-full object-cover opacity-40 hover:opacity-60" src="https://utfs.io/f/ba0Al6LG58m3TJwG4ClpCyO7sfjZSi0E3TNqKGIJg5cBVXl1" alt="Content Creation" />
  },
  {
    Icon: BellIcon,
    name: "Internet of Things (IoT)",
    description: "Smart IoT solutions for efficient operations.",
    href: "/services/iot",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <img className="h-full w-full object-cover opacity-40 hover:opacity-60" src="https://utfs.io/f/f253135a-231d-4c84-b9bf-01d12017d8c8-a34qko.png" alt="IoT" />
  },
  {
    Icon: BellIcon,
    name: "Intelligent Applications",
    description: "Automate and enhance processes through AI-powered applications for better efficiency.",
    href: "/services/iot",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <img className="h-full w-full object-cover opacity-40 hover:opacity-60" src="https://utfs.io/f/37e0518d-ea5b-49c0-a5e3-cc499d481f64-lsdzlu.png" alt="IoT" />
  },
  {
    Icon: Share2Icon,
    name: "Data Analytics",
    description: "Advanced tools to collect, clean, analyze, and visualize your data for informed decision-making.",
    href: "/services/smart-city-integration",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <img className="h-full w-full object-cover opacity-40 hover:opacity-60" src="https://utfs.io/f/40e36e01-a032-475d-8710-4bb32ac32e18-3snr3a.png" alt="Smart City Integration" />
  },
  {
    Icon: VideoIcon,
    name: "Streaming Services",
    description: "Reliable platforms for seamless content streaming.",
    href: "/services/streaming-services",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <img className="h-full w-full object-cover opacity-40 hover:opacity-60" src="https://utfs.io/f/ba0Al6LG58m3BEbV1rXTacvHLRP8unSk32owrlOWXQgqy6K5" alt="Streaming Services" />
  },
  {
    Icon: CameraIcon,
    name: "Venue Videos",
    description: "Professional video solutions for events and venues.",
    href: "/services/venue-videos",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: <img className="h-full w-full object-cover opacity-40 hover:opacity-60" src="https://utfs.io/f/ba0Al6LG58m3GpMtQt5h3C8cxLJsoE70WMdplbTQYVNvBrfH" alt="Venue Videos" />
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