import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-24 scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <p className="text-amber-500 uppercase tracking-[0.2em] mb-4">About Us</p>
            <h2 className="text-5xl font-light mb-6">
              A Taste of <span className="text-amber-500">Authentic Spain</span>
            </h2>
            <div className="w-16 h-[1px] bg-amber-500"></div>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Welcome to Bainbridge Tapas, an authentic Spanish tapas haven nestled in the heart of Bainbridge Island, Washington.
          </p>
          <p className="text-gray-400 leading-relaxed">
            A step inside etapas instantly transports you to the vibrant streets of Spain, where the air is filled with laughter, conversations, and the irresistible aromas of traditional tapas.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Our mission is to bring the essence of Spanish culture and gastronomy to your table, providing an unforgettable culinary journey that will have your taste buds dancing with delight.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <img
              src="https://ik.imagekit.io/a7tech/Tapasimages/Tapas-Skewers.jpg?updatedAt=1730670118046"
              alt="Tapas skewers"
              className="w-full h-full object-cover"
            />
            <p className="text-gray-400 text-sm">Tapas Skewers Pincho de Carne(Small Meat Skewers)</p>
          </div>
          <div className="space-y-2 mt-12">
            <img
              src="https://ik.imagekit.io/a7tech/Tapasimages/ChickenSchwarme.jpg?updatedAt=1730670153202"
              alt="Chicken shawarma"
              className="w-full h-full object-cover"
            />
            <p className="text-gray-400 text-sm">Chicken Shawarma Seasonal vegetables, saffron rice, harissa</p>
          </div>
        </div>
      </div>
    </section>
  );
};