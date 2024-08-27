import { Route, Routes } from "react-router-dom";
import Layout from "./app/layout";
import Home from "./app/home";
import { useEffect } from "react";
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

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
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
