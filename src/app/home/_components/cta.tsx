import Magnetic from '@/components/elements/magnetic'
import { Button } from '@/components/ui/button'

const Cta = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
        <div className="">
            <p className="uppercase text-muted-foreground/40 text-8xl font-extrabold">
                stay ahead of the curve
            </p>
        </div>
        <Magnetic>
            <Button className="uppercase bg-accent hover:bg-primary h-16 w-48 font-bold text-sm rounded-sm">
                start today
            </Button>
        </Magnetic>
    </div>
  )
}

export default Cta
