import { pages } from "@/config/pages";
import SiteShell from "../shells/site-shell";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import EmailForm from "./email-form";
import { AccordionContent, AccordionTrigger, Accordion, AccordionItem } from "../ui/accordion";
// import { ModeToggle } from "../themes/mode-toggle";
import YouTubeIcon from "@/components/icons/youtube";
import InstagramIcon from "@/components/icons/instagram";
import FacebookIcon from "@/components/icons/facebook";
import { cn } from "@/lib/utils";


const Footer = () => {
    const helpAndInfo = [
        ...pages,
        {
            title: 'T&Cs',
            href: '/terms-and-conditions'
        },
        {
            title: 'delivery',
            href: '/delivery'
        },
    ]
  return (
    <div className="bg-[#0f0f0f] text-[#fcfcfc] py-12">
        <SiteShell
            className="space-y-8"
        >
            <div className="flex md:flex-row justify-around gap-y-8 flex-col-reverse">

                <div className="md:space-y-4">
                    {/* Desktop item */}
                    <div className="hidden md:block">
                    <h1 className="text-4xl font-grotesk">
                        Help & Info
                    </h1>
                        <div className="flex flex-col capitalize items-start">
                            {helpAndInfo.map(page => (
                                <Link
                                    to={page.href}
                                    key={page.title}
                                    className={cn(buttonVariants({ variant: "link" }), 'text-muted-foreground p-0 h-8 hover:text-[#fcfcfc]')}
                                >
                                    {page.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile items */}
                    <Accordion type="multiple" className="md:hidden">
                        <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <h1 className="text-xl font-bold">Help and Info</h1>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col capitalize items-start">
                            {helpAndInfo.map((page) => (
                                <Link
                                    to={page.href}
                                    key={page.title}
                                    className={cn(buttonVariants({ variant: "link" }), 'text-muted-foreground p-0 h-8 hover:text-[#fcfcfc]')}
                                >
                                    {page.title}
                                </Link>
                            ))}
                        </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>


                <div className="md:space-y-4">
                    <h1 className="text-4xl font-grotesk">
                        Contact
                    </h1>
                    <div className="flex flex-col items-start">
                        <Link
                            to={'eispositive@placeholder.com'}
                            className={cn(buttonVariants({ variant: "link" }), 'text-muted-foreground p-0 h-8 hover:text-[#fcfcfc]')}
                        >
                            eispositive@placeholder.com
                        </Link>

                        <Link
                            to={'#'}
                            className={cn(buttonVariants({ variant: "link" }), 'text-muted-foreground p-0 h-8 hover:text-[#fcfcfc]')}
                        >
                            +1 5263 237902
                        </Link>
                        <div className="w-full flex items-center gap-4">
                            <Link to={'https://www.facebook.com'} target="_blank">
                                <FacebookIcon className="size-7" />
                            </Link>
                            
                            <Link to={'https://www.instagram.com'} target="_blank">
                                <InstagramIcon className="size-6" />
                            </Link>

                            <Link to={'https://www.youtube.com'} target="_blank">
                                <YouTubeIcon className="size-11" />
                            </Link>
                        </div>
                    </div>

                </div>
                <div className="md:space-y-4 space-y-2">
                <h1 className="text-4xl font-grotesk">You have feedback?</h1>
                    <EmailForm />
                    {/* <ModeToggle /> */}
                </div>
            </div>
        </SiteShell>
    </div>
  )
}

export default Footer