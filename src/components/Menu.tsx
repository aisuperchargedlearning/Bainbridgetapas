import React from 'react';

interface MenuItem {
  name: string;
  description: string;
  price?: string | number;
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
        { name: "Ensalada Griega", description: "Traditional Greek salad" },
        { name: "Hummus", description: "Served with pita" },
        { name: "Jamón Serrano", description: "Fermín ham, bread, tomato pulp" },
        { name: "Olives Medley", description: "Manzanilla, Castelvetrano, Cerignola, herbs" },
        { name: "Manchego & Membrillo", description: "Quince paste, olive oil, bread" },
        { name: "Boquerones", description: "Spanish anchovies, olive oil, tomatoes, bread" }
      ]
    },
    {
      title: "Hot Tapas",
      items: [
        { name: "Cauliflower", description: "Roasted cauliflower, lime, herbs, bread" },
        { name: "Wild Mushrooms Cazuela", description: "Fresh local wild mushrooms, garlic, sherry, bread" },
        { name: "Gambas al Ajillo", description: "Garlic shrimp, paprika, sherry, bread" },
        { name: "Falafitas", description: "Garbanzo patties, tzatziki" },
        { name: "Lamb Chops", description: "Roasted potatoes, harissa sauce" },
        { name: "Patatas Bravas", description: "Roasted potatoes, brava sauce, aioli" },
        { name: "Clams con Chorizo", description: "Fresh clams, chorizo, brava sauce, bread" },
        { name: "Pumpkin Soup", description: "Roasted carrots, Moroccan spices, bread" }
      ]
    }
  ];

  const perUnitItems = [
    {
      name: "Empanadas",
      description: "Ground beef, four cheese, harissa"
    },
    {
      name: "Pincho de Carne",
      description: "Small meat skewer, mojo verde"
    },
    {
      name: "Spanakopita",
      description: "Spinach, feta cheese, phyllo dough, tzatziki sauce"
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
        </div>
      </div>
    </section>
  );
};

export default Menu;