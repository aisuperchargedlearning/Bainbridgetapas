import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
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
      <section className="py-24 bg-[#1A1A1A]">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-500 uppercase tracking-[0.2em] mb-4">Special Event</p>
            <h2 className="text-5xl font-light mb-6">Valentine's Day</h2>
            <div className="w-16 h-[1px] bg-amber-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full">
              <img 
                src="https://ik.imagekit.io/a7tech/Tapas%20images/Tapas%20event%202.jpg?updatedAt=1737398618482"
                alt="Valentine's Day Musical Event"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="w-full">
              <img 
                src="https://ik.imagekit.io/a7tech/Tapas%20images/Valentines%20menu.jpg"
                alt="Valentine's Day Menu"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
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