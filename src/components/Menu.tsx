import React from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string | number;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const Menu: React.FC = () => {
  const menuSections: MenuSection[] = [
    {
      title: "Cold Tapas",
      items: [
        { name: "Ensalada Griega", description: "Traditional Greek salad", price: 11 },
        { name: "Hummus", description: "Served with pita", price: 9 },
        { name: "Jamón Serrano", description: "Fermín ham, bread, tomato pulp", price: 12 },
        { name: "Olives Medley", description: "Manzanilla, Castelvetrano, Cerignola, herbs", price: 7 },
        { name: "Manchego & Membrillo", description: "Quince paste, olive oil, bread", price: 10 },
        { name: "Boquerones", description: "Spanish anchovies, olive oil, tomatoes, bread", price: 9 }
      ]
    },
    {
      title: "Hot Tapas",
      items: [
        { name: "Cauliflower", description: "Roasted cauliflower, lime, herbs, bread", price: 13 },
        { name: "Wild Mushrooms Cazuela", description: "Fresh local wild mushrooms, garlic, sherry, bread", price: 15 },
        { name: "Gambas al Ajillo", description: "Garlic shrimp, paprika, sherry, bread", price: 17 },
        { name: "Falafitas", description: "Garbanzo patties, tzatziki", price: 15 },
        { name: "Lamb Chops", description: "Roasted potatoes, harissa sauce", price: 18 },
        { name: "Patatas Bravas", description: "Roasted potatoes, brava sauce, aioli", price: 9 },
        { name: "Clams con Chorizo", description: "Fresh clams, chorizo, brava sauce, bread", price: 16 },
        { name: "Pumpkin Soup", description: "Roasted carrots, Moroccan spices, bread", price: 10 }
      ]
    }
  ];

  const perUnitItems = [
    {
      name: "Empanadas",
      description: "Ground beef, four cheese, harissa",
      prices: { one: 7, two: 13, three: 18 }
    },
    {
      name: "Pincho de Carne",
      description: "Small meat skewer, mojo verde",
      prices: { one: 8, two: 14, three: 19 }
    },
    {
      name: "Spanakopita",
      description: "Spinach, feta cheese, phyllo dough, tzatziki sauce",
      prices: { one: 7, two: 13, three: 18 }
    }
  ];

  return (
    <section id="menu" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-6 text-white">Our Menu</h2>
          <p className="text-amber-500 uppercase tracking-[0.2em]">Tapas & Vinos</p>
          <p className="text-gray-400 mt-4">Tapas are served as they're ready</p>
          <div className="w-16 h-[1px] bg-amber-500 mx-auto mt-8"></div>
        </div>

        {menuSections.map((section, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-3xl font-light mb-8 text-white">{section.title}</h3>
            <div className="grid gap-8">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex justify-between items-baseline border-b border-gray-800 pb-4">
                  <div>
                    <h4 className="text-xl text-white mb-2">{item.name}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                  <span className="text-amber-500 ml-4">${item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mb-16">
          <h3 className="text-3xl font-light mb-8 text-white">Tapas Per Unit</h3>
          <div className="grid gap-8">
            {perUnitItems.map((item, index) => (
              <div key={index} className="border-b border-gray-800 pb-4">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl text-white">{item.name}</h4>
                </div>
                <p className="text-gray-400 mb-2">{item.description}</p>
                <div className="text-amber-500">
                  One: ${item.prices.one} | Two: ${item.prices.two} | Three: ${item.prices.three}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#2A2A2A] p-8 rounded-lg">
          <h3 className="text-3xl font-light mb-6 text-white">Tour de España</h3>
          <p className="text-gray-400 mb-4">For 2 or 4 people</p>
          <ul className="text-gray-400 mb-6 space-y-2">
            <li>• Pumpkin Soup</li>
            <li>• Olives Medley</li>
            <li>• Jamón Serrano</li>
            <li>• Empanadas</li>
            <li>• Patatas Bravas</li>
            <li>• Paella Mixta</li>
            <li>• Churros</li>
          </ul>
          <p className="text-amber-500">Price: $99 (for 2) / $149 (for 4)</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;