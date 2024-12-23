import React from 'react';

export const TapasEvents = () => {
  return (
    <section className="py-24 bg-[#2A2A2A]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-amber-500 uppercase tracking-[0.2em] mb-4">Special Events</p>
          <h2 className="text-5xl font-light mb-6">Tapas Events</h2>
          <div className="w-16 h-[1px] bg-amber-500 mx-auto mb-8"></div>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl text-amber-500 mb-3">Included with the New Year's Eve Menu:</h3>
            <h4 className="text-lg font-medium mb-2">A Complimentary Toast</h4>
            <p className="text-gray-400">
              Celebrate with a free glass of Rosé Bubbly or Rosé Cava, perfectly paired to elevate your dining experience and toast to the New Year in style.
            </p>
          </div>
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