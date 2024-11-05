import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#1A1A1A]/95 backdrop-blur-sm fixed w-full z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1 className="font-brand font-black text-3xl text-white hover:text-amber-500 transition-colors duration-300">
              Bainbridge Tapas
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-12">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'Menu', id: 'menu' },
                { name: 'About', id: 'about' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-amber-500 transition-colors duration-300 tracking-wide"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-amber-500 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { name: 'Home', id: 'hero' },
              { name: 'Menu', id: 'menu' },
              { name: 'About', id: 'about' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-amber-500 transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};