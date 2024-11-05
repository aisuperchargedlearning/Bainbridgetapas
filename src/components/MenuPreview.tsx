import React from 'react';
import { ArrowRight } from 'lucide-react';

const MenuPreview = () => {
  const menuItems = [
    {
      name: "Patatas Bravas",
      description: "Crispy potatoes, spicy tomato sauce, garlic aioli",
      price: "$8",
      image: "https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      name: "Gambas al Ajillo",
      description: "Garlic shrimp, olive oil, chili",
      price: "$12",
      image: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?auto=format&fit=crop&q=80&w=800&h=600"
    },
    {
      name: "Jamón Ibérico",
      description: "Premium Iberian ham, aged 36 months",
      price: "$16",
      image: "https://images.unsplash.com/photo-1632373564714-9c04c65c5c6c?auto=format&fit=crop&q=80&w=800&h=600"
    }
  ];

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <p className="text-amber-500 uppercase tracking-[0.2em] mb-4">Our Menu</p>
        <h2 className="text-5xl font-light mb-6">Popular Tapas</h2>
        <div className="w-16 h-[1px] bg-amber-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden bg-[#2A2A2A] hover:scale-105 transition-transform duration-500"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-light tracking-wide">{item.name}</h3>
                <span className="text-amber-500 font-medium">{item.price}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="inline-flex items-center gap-2 border border-amber-500 text-amber-500 px-12 py-4 hover:bg-amber-500 hover:text-black transition-colors duration-300 text-sm uppercase tracking-wider font-medium">
          Full Menu <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default MenuPreview;