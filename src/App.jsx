import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Manifesto from './components/Manifesto';
import About from './components/About';
import Services from './components/Services';
import Audience from './components/Audience';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <Header openContactModal={() => setIsContactModalOpen(true)} />
      <main>
        <Hero openContactModal={() => setIsContactModalOpen(true)} />
        <Marquee />
        <Manifesto />
        <About />
        <Services />
        <Audience openContactModal={() => setIsContactModalOpen(true)} />
      </main>
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}

export default App;
