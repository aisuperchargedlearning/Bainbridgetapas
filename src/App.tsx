import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FinalToast } from './components/FinalToast';
import { SomethingNew } from './components/SomethingNew';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Reviews } from './components/Reviews';
import { Map } from './components/Map';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-[#1A1A1A] text-white min-h-screen">
      <Navbar />
      <Hero />
      <FinalToast />
      <SomethingNew />
      <div className="max-w-[1400px] mx-auto px-4">
        <Menu />
        <About />
        <Reviews />
        <Map />
      </div>
      <Footer />
    </div>
  );
}

export default App;