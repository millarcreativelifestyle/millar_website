import React from "react";
import "./App.css";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Section7 from "./sections/Section7";
import Section8 from "./sections/Section8";
import Footer from "./components/Footer";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
function App() {
  const lenis = new Lenis({
    autoRaf: true,
  });

  return (
    <div className="container-fluid d-flex flex-column p-0 wrapper">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
    </div>
  );
}

export default App;
