import "./App.css";
import React from "react";
import Hero from "./components/Hero";
import Notify from "./components/Notify";
import Journey from "./components/Journey";
import Avatars from "./components/Avatars";
import Storytelling from "./components/Storytelling";
import Team from "./components/Team";
import Charlie from "./components/Charlie";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import BackToTop from "./components/common/Backtotop";
import Lenis from "lenis";
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

function App() {
  return (
    <>
      <Hero />
      <Notify />
      <Journey />
      <Avatars />
      <Storytelling />
      <Team />
      <Charlie />
      <Partners />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
