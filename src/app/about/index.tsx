import Approach from "./_components/approach"
import Banner from "./_components/banner"
import Mission from "./_components/mission"
import Vision from "./_components/vision"

const About = () => {
  return (
  <div className="">
    <div className="fixed h-screen top-0 lg:left-8 md:left-4 left-2 lg:right-8 md:right-4 right-2 overflow-hidden -z-10">
      <img
        src="https://utfs.io/f/37e0518d-ea5b-49c0-a5e3-cc499d481f64-lsdzlu.png"
        className="h-full w-full object-cover"
        alt=""
      />
    </div>
    
    <Banner />
    <div className="bg-background space-y-12">
      <Mission />
      <Vision />
      <Approach />
    </div>
  </div>
  )
}

export default About
