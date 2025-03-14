import React from 'react';

export const SpecialEvent = () => {
  return (
    <section className="relative py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <img
          src="https://ik.imagekit.io/a7tech/Tapas%20images/backgroundevent.jpg"
          alt="Spring Pairing Event Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-amber-500 uppercase tracking-[0.2em] mb-4">Special Event</p>
          <h2 className="text-5xl font-light mb-6">Spring Pairing Event</h2>
          <div className="w-16 h-[1px] bg-amber-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <p className="text-2xl mb-4">March 30 at 5 PM</p>
            <p className="text-xl text-amber-500 mb-4">Live Music!</p>
            <p className="text-xl mb-8">$94 per person</p>
          </div>

          <div className="space-y-6 mb-8">
            <h3 className="text-2xl font-light mb-6">Menu & Wine Pairings</h3>
            <div className="space-y-4 text-left max-w-2xl mx-auto bg-black/30 p-8 rounded-lg">
              <div className="border-b border-gray-700 pb-4">
                <p className="text-xl mb-2">Pear Gazpacho with Scallops</p>
                <p className="text-amber-500">Paired with Rezabal White</p>
              </div>
              <div className="border-b border-gray-700 pb-4">
                <p className="text-xl mb-2">Grilled Asparagus with Salmon & Homemade Romesco</p>
                <p className="text-amber-500">Paired with Black Slate</p>
              </div>
              <div className="border-b border-gray-700 pb-4">
                <p className="text-xl mb-2">Chorizo Patatas Bravas</p>
                <p className="text-amber-500">Paired with Termes</p>
              </div>
              <div className="border-b border-gray-700 pb-4">
                <p className="text-xl mb-2">Solomillo al Tempranillo</p>
                <p className="text-amber-500">Paired with Marqués de Murrieta</p>
              </div>
              <div>
                <p className="text-xl mb-2">Basque Cheesecake</p>
                <p className="text-amber-500">Paired with Gelida Cava</p>
              </div>
            </div>
          </div>

          <p className="text-xl text-amber-500">Now taking reservations!</p>
          <p className="text-gray-300 mt-2">Don't miss out on this curated dining experience featuring delicious food and expertly paired wines.</p>
        </div>
      </div>
    </section>
  );
};