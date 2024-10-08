import { Route, Routes } from "react-router-dom";
import Layout from "./app/layout";
import Home from "./app/home";
import { useEffect } from "react";
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import MenuPage from "./components/elements/menu-page";
import About from "./app/about";
import Partners from "./app/partners";
import Contact from "./app/contact";

const App = () => {

  useEffect(() => {
    const lenis = new Lenis()
    
    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, []);

  return (
    <div className="relative">
      <MenuPage />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="partners" element={<Partners />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
