import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Manifesto from './components/Manifesto';
import About from './components/About';
import Services from './components/Services';
import Audience from './components/Audience';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <About />
        <Services />
        <Audience />
      </main>
      <Footer />
    </>
  );
}

export default App;
