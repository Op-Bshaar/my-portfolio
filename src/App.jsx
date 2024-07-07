import React from 'react';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technology from "./components/Technology";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-custom-bg text-neutral-300">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="technology">
        <Technology />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
