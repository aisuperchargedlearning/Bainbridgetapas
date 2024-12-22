import React from 'react';

export const TapasEvents = () => {
  return (
    <section className="py-24 bg-[#2A2A2A]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-amber-500 uppercase tracking-[0.2em] mb-4">Special Events</p>
          <h2 className="text-5xl font-light mb-6">Tapas Events</h2>
          <div className="w-16 h-[1px] bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://ik.imagekit.io/a7tech/Tapas%20images/Newyearsmenu.jpg?updatedAt=1734826777390"
            alt="New Year's Special Menu"
            className="w-full h-auto rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};