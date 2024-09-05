import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import Logo from './logo';
import DesktopNav from './desktop-nav';
import { Button } from '../ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import MenuToggle from './menu-toggle/menu-toggle';
import { useMenuStore } from '@/store/menu-open-store';

const Header = () => {
    const { menuOpen, toggleMenu } = useMenuStore((state) => state);

    const [hidden, setHidden] = useState(false);
    const lastYRef = useRef(0);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const difference = latest - lastYRef.current;
        
        if (Math.abs(difference) > 50) {
            setHidden(difference > 0);

            lastYRef.current = latest;
        }
    })

  return (
    <motion.header
        className="fixed left-0 right-0 h-20 z-[100] flex justify-between items-center bg-background/20 backdrop-blur-lg backdrop-opacity-100 lg:px-8 md:px-4 px-2"
        variants={{
            visible: { y: 0 },
            hidden: { y: '-100%' }
        }}
        animate={hidden ? 'hidden': 'visible'}
        transition={{ duration: 0.2 }}
    >
        <Logo className='w-40' />

        <DesktopNav />
        {/* TODO: Mobile nav */}

        <div className="md:flex hidden items-center gap-4">
            <Button
                variant="expandIcon"
                Icon={ArrowRightIcon}
                iconPlacement="right"
                className='border bg-transparent hover:bg-transparent text-muted-foreground hover:text-primary hover:border-primary'
            >
                Contact
            </Button>

            <MenuToggle open={menuOpen} setOpen={toggleMenu} />
        </div>
    </motion.header>
  )
}

export default Header