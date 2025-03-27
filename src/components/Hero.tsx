import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    "https://ik.imagekit.io/a7tech/Tapasimages/Tapasbarimage.jpg?updatedAt=1730503559511",
    "https://ik.imagekit.io/a7tech/Tapasimages/TAPASFOODSPREAD.jpg?updatedAt=1730504660687",
    "https://ik.imagekit.io/a7tech/Tapasimages/Sonjawithplatter2.jpg?updatedAt=1730669577592"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current === images.length - 1 ? 0 : current + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            activeImage === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img
            src={image}
            alt={`Restaurant ambiance ${index + 1}`}
            className={`w-full h-full object-cover ${
              index === 2 ? 'object-top' : 'object-center'
            }`}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-4">
        <div className="max-w-3xl">
          <p className="text-amber-500 uppercase tracking-[0.2em] mb-4 text-base md:text-lg">The Spanish Experience</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
            Authentic
            <br />
            <span className="font-medium">Spanish Tapas</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
            Discover the Essence of Spanish Cuisine at the Heart of Bainbridge Island
          </p>
          <button 
            onClick={scrollToMenu}
            className="bg-amber-500 text-black px-8 sm:px-12 py-4 rounded-none hover:bg-amber-400 transition-colors duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider font-medium"
          >
            View Menu <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};