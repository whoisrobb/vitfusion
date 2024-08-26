import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
} from "../ui/navigation-menu"
import { cn } from "../../lib/utils";

const components: { title: string; href: string; description: string }[] = [
    {
      title: "Content Creation",
      href: "/services/content-creation",
      description: "Tailored content that enhances brand visibility and engagement.",
    },
    {
      title: "Internet of Things (IoT)",
      href: "/services/iot",
      description: "Smart IoT solutions connecting devices for efficient operations.",
    },
    {
      title: "Smart City Integration",
      href: "/services/smart-city-integration",
      description: "Advanced technologies for intelligent urban infrastructure and analytics.",
    },
    {
      title: "Streaming Services",
      href: "/services/streaming-services",
      description: "Reliable streaming platforms for seamless content distribution.",
    },
    {
      title: "Venue Videos",
      href: "/services/venue-videos",
      description: "Professional video solutions capturing events at any venue.",
    }
];

const partners: { title: string; href: string; description: string }[] = [
    {
      title: "iCre8 Content",
      href: "/partners/icre8-content",
      description: "Innovative content creation and digital media solutions provider.",
    },
    {
      title: "Everything is Positive",
      href: "/partners/everything-is-positive",
      description: "Promoting positivity through cultural and digital engagement.",
    },
    {
      title: "Automated Intelligence",
      href: "/partners/automated-intelligence",
      description: "Advanced AI solutions for automation and intelligent systems.",
    }
];  

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Partners</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[400px] gap-3 p-4">
              {partners.map((partner) => (
                <ListItem
                  key={partner.title}
                  title={partner.title}
                  href={partner.href}
                >
                  {partner.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
