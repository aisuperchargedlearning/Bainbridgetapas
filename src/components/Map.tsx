import React from 'react';
import { MapPin } from 'lucide-react';

export const Map = () => {
  return (
    <section id="map-section" className="py-24 bg-[#2A2A2A] scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-amber-500 uppercase tracking-[0.2em] mb-4">Find Us</p>
          <h2 className="text-5xl font-light mb-6">Visit Our Restaurant</h2>
          <div className="w-16 h-[1px] bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            <img 
              src="https://ik.imagekit.io/a7tech/Tapasimages/Map-to-Bainbridge-tapaps-p-800%20copy.jpeg?updatedAt=1730506746611"
              alt="Map to Bainbridge Tapas"
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <div className="absolute bottom-6 left-6 bg-[#1A1A1A]/90 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
              <MapPin className="text-amber-500" />
              <div>
                <p className="font-medium">403 Madison Ave N #130</p>
                <p className="text-sm text-gray-400">Bainbridge Island, WA 98110</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};