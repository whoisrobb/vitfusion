import Banner from "./_components/banner"
import Cta from "./_components/cta"
import Description from "./_components/description"
import IntroVideo from "./_components/intro-video"
import Services from "./_components/services"

const Home = () => {
  return (
    <div className='space-y-8 pb-20'>
      <Banner />
      <IntroVideo />
      <Description />
      <Cta />
      <Services />
    </div>
  )
}

export default Home
