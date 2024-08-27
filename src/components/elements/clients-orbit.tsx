import OrbitingCircles from "../magicui/orbiting-circles";

export function ClientsOrbit() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Clientele
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={30}
        delay={20}
        radius={80}
      >
        <Icons.image1 />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={30}
        delay={10}
        radius={80}
      >
        <Icons.image2 />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={25}
        reverse
      >
        <Icons.image3 />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={25}
        delay={20}
        reverse
      >
        <Icons.image4 />
      </OrbitingCircles>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={300}
      >
        <Icons.image5 />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={300}
      >
        <Icons.image6 />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  image1: () => (
    <img src="/images/UGA-logo.png" alt="Client 1" className="w-full" />
  ),
  image2: () => (
    <img src="/images/The-Queen-1536x1536.png" alt="Client 2" className="w-full" />
  ),
  image3: () => (
    <img src="/images/The-Integral-Group.png" alt="Client 3" className="w-48" />
  ),
  image4: () => (
    <img src="/images/georgia-tech-logo.png" alt="Client 4" className="w-24" />
  ),
  image5: () => (
    <img src="/images/Georgia-Power-logo-color.png" alt="Client 4" className="w-24" />
  ),
  image6: () => (
    <img src="/images/Atlanta-Housing-Authority-logo.png" alt="Client 4" className="w-24" />
  ),
};
