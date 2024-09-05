
import TextRevealByWord from '@/components/magicui/text-reveal'

const paragraph = "Welcome to Vision Interactive Technology Fusion (VITF), where technology meets the future. At VITF, we harness the power of Artificial Intelligence (AI) and intelligence analytics to create real, tangible value. Our mission is to transform industries and uplift communities by integrating cutting-edge technology with the Internet of Value (IoV). Our agnostic approach to technology evolution puts us at the forefront of innovation, delivering solutions that go beyond mere products or services."

const Description = () => {
  return (
    <div className=''>
        <div className="z-10 flex items-center justify-center rounded-lg">
            <TextRevealByWord text={paragraph} />
        </div>
    </div>
  )
}

export default Description
