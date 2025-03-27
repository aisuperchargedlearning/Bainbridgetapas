import React from 'react';

export const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-6 text-white">BAINBRIDGE TAPAS</h2>
          <p className="text-amber-500 uppercase tracking-[0.2em]">TAPAS & VINOS</p>
          <p className="text-gray-400 mt-4">Tapas are served as they're ready</p>
          <div className="w-16 h-[1px] bg-amber-500 mx-auto mt-8"></div>
        </div>

        {/* Cold Tapas */}
        <div className="mb-16">
          <h3 className="text-3xl font-light mb-8 text-white text-center uppercase border-b border-gray-800 pb-4">Cold Tapas</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-amber-500 mb-2">ENSALADA GRIEGA</h4>
                <p className="text-gray-400 italic">Traditional Greek salad.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">MANCHEGO & MEMBRILLO</h4>
                <p className="text-gray-400 italic">Quince paste, olive oil, bread.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">HUMMUS</h4>
                <p className="text-gray-400 italic">Served with warm pita.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-amber-500 mb-2">BOQUERONES</h4>
                <p className="text-gray-400 italic">Spanish anchovies, olive oil, tomatoes, bread</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">JAMON SERRANO</h4>
                <p className="text-gray-400 italic">Fermin ham, bread, tomato pulp.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">OLIVES MEDLEY</h4>
                <p className="text-gray-400 italic">Manzanilla, castelvetrano, cerignola, herbs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tapas Per Unit */}
        <div className="mb-16">
          <h3 className="text-3xl font-light mb-8 text-white text-center uppercase border-b border-gray-800 pb-4">Tapas Per Unit</h3>
          <div className="grid grid-cols-4 mb-4">
            <div></div>
            <div className="text-center font-bold text-white">ONE</div>
            <div className="text-center font-bold text-white">TWO</div>
            <div className="text-center font-bold text-white">THREE</div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-amber-500 mb-2">EMPANADAS</h4>
                <p className="text-gray-400 italic">Ground beef, four cheese, harissa.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">PINCHO MORUNO*</h4>
                <p className="text-gray-400 italic">Pork skewer, blue cheese sauce.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-amber-500 mb-2">SPANAKOPITA</h4>
                <p className="text-gray-400 italic">Spinach, feta cheese, phyllo dough, tzatziki sauce.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">LAMB MINI PITAS</h4>
                <p className="text-gray-400 italic">Braised lamb, onion, harissa, feta.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Platos */}
        <div className="mb-16">
          <h3 className="text-3xl font-light mb-8 text-white text-center uppercase border-b border-gray-800 pb-4">Platos</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl text-amber-500 mb-2">PAELLA MIXTA</h4>
              <p className="text-gray-400 italic">Spanish chorizo, Manila clams, chicken, prawns, saffron broth, rice, paprika, aioli. Please allow 45-60 min.</p>
            </div>
            <div>
              <h4 className="text-xl text-amber-500 mb-2">CHICKEN SHAWARMA</h4>
              <p className="text-gray-400 italic">Shawarma style free range chicken, rice, veggies, harissa and tzatziki.</p>
            </div>
            <div>
              <h4 className="text-xl text-amber-500 mb-2">LAMB TAGINE</h4>
              <p className="text-gray-400 italic">Braised Morrocan style lamb, ras el hanout, dried apricots, veggies, rice and harissa.</p>
            </div>
            <div>
              <h4 className="text-xl text-amber-500 mb-2">LOMO AL ROMESCO</h4>
              <p className="text-gray-400 italic">Beef striploin, roasted potatoes, veggies, Romesco sauce.</p>
            </div>
          </div>
        </div>

        {/* Tour de España */}
        <div className="border border-white p-8 text-center mb-16">
          <h3 className="text-2xl text-white mb-4">TOUR DE ESPAÑA FOR 2</h3>
          <p className="text-gray-400">Mushroom soup, olives medley, jamon serrano, empanadas, patatas bravas, Paella mixta y crema catalana.</p>
        </div>

        {/* Hot Tapas */}
        <div className="mb-16">
          <h3 className="text-3xl font-light mb-8 text-white text-center uppercase border-b border-gray-800 pb-4">Hot Tapas</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-amber-500 mb-2">CAULIFLOWER</h4>
                <p className="text-gray-400 italic">Roasted cauliflower, lemon juice, paprika, almonds, romesco.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">GAMBAS AL AJILLO</h4>
                <p className="text-gray-400 italic">Garlic shrimp, paprika, sherry, bread.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">LAMB CHOPS*</h4>
                <p className="text-gray-400 italic">Roasted potatoes, harissa sauce.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">CLAMS CON CHORIZO</h4>
                <p className="text-gray-400 italic">Fresh clams, chorizo, brava sauce, bread.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-amber-500 mb-2">SCALLOPS CON TOCINO</h4>
                <p className="text-gray-400 italic">Local mushrooms, onions, cream, paprika.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">PATATAS BRAVAS</h4>
                <p className="text-gray-400 italic">Roasted potatoes, brava sauce, aioli.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">FALAFITAS</h4>
                <p className="text-gray-400 italic">Garbanzo patties, tzatziki.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">WILD MUSHROOMS CAZUELA</h4>
                <p className="text-gray-400 italic">Fresh local wild mushrooms, garlic, sherry, served with bread.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-500 text-center max-w-3xl mx-auto">
          *CONSUMING RAW OR UNDERCOOKED PROTEIN DOES CREATE HIGHER RISK OF FOOD BORNE ILLNESS.
          PLEASE BE AWARE THAT OUR FOOD MAY CONTAIN OR COME INTO CONTACT WITH COMMON ALLERGENS,
          SUCH AS DAIRY, EGGS, WHEAT, SOYBEANS, TREE NUTS, PEANUTS, FISH, SHELLFISH OR WHEAT.
        </div>
      </div>
    </section>
  );
};

export default Menu;