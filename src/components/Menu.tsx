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

        {/* Cocktails */}
        <div className="mb-16">
          <h3 className="text-3xl font-light mb-8 text-white text-center uppercase border-b border-gray-800 pb-4">Cocktails</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-amber-500 mb-2">SANGRIA</h4>
                <p className="text-gray-400 italic">Red wine, maple syrup, bourbon, cider, fresh grapefruit.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">ANDALUCIA</h4>
                <p className="text-gray-400 italic">Tequila, guava nectar, lime juice, triple sec rim with Tajín.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">JILIPOLLAS</h4>
                <p className="text-gray-400 italic">Bourbon, orange, aromatic bitter, orange peel, smoke glass.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">PALOMINO</h4>
                <p className="text-gray-400 italic">Rum, fresh pineapple, coconut purée.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-amber-500 mb-2">EL GUAPO OSMARINO</h4>
                <p className="text-gray-400 italic">Vodka, grapefruit juice, ginger beer, lime juice.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">TINTO DE VERANO</h4>
                <p className="text-gray-400 italic">Whiskey, sweet vermouth, orange bitters, cherry garnish.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">ANCHOR NEGRONI</h4>
                <p className="text-gray-400 italic">Campari, anchanpea tea, sweet vermouth, splash of Jäger.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Non-Alcoholic */}
        <div className="mb-16">
          <h3 className="text-3xl font-light mb-8 text-white text-center uppercase border-b border-gray-800 pb-4">Non-Alcoholic</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-amber-500 mb-2">EMILITA</h4>
                <p className="text-gray-400 italic">Strawberry, mint, lime, simple syrup, soda water.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">SONJA SPRITZ</h4>
                <p className="text-gray-400 italic">Non-alcoholic sparkling wine, orange, grapefruit, soda.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-amber-500 mb-2">REBUJITO</h4>
                <p className="text-gray-400 italic">Fresh fruit, lemon, syrup, mint, sweet and sour. (Pick flavor: pineapple / cucumber / guava)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cold Tapas */}
        <div className="mb-16">
          <h3 className="text-3xl font-light mb-8 text-white text-center uppercase border-b border-gray-800 pb-4">Cold Tapas</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-amber-500 mb-2">SPANISH SALAD</h4>
                <p className="text-gray-400 italic">Spring greens, sherry balsamic vinaigrette, fruit, Spanish blue cheese.</p>
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
                <h4 className="text-xl text-amber-500 mb-2">JAMÓN SERRANO</h4>
                <p className="text-gray-400 italic">Fermin ham, bread, tomato pulp.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">OLIVES MEDLEY</h4>
                <p className="text-gray-400 italic">Manzanilla, castelvetrano, cerignola, herbs.</p>
              </div>
            </div>
          </div>
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
                <h4 className="text-xl text-amber-500 mb-2">LAMB CHOPS</h4>
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
                <p className="text-gray-400 italic">Seared scallops, saffron rice, mojo verde.</p>
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

        {/* Tapas Per Unit */}
        <div className="mb-16">
          <h3 className="text-3xl font-light mb-8 text-white text-center uppercase border-b border-gray-800 pb-4">Tapas Per Unit</h3>
          <p className="text-center text-gray-400 mb-6 italic">(Choose one, two, or three)</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-amber-500 mb-2">EMPANADAS</h4>
                <p className="text-gray-400 italic">Ground beef, four cheese, harissa.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">PINCHO MORUNO</h4>
                <p className="text-gray-400 italic">Pork skewer, blue cheese sauce.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-amber-500 mb-2">SPINACH PIE</h4>
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
              <p className="text-gray-400 italic">Spanish chorizo, Manila clams, chicken, prawns, saffron broth, rice, paprika, aioli. (Please allow 45-60 minutes.)</p>
            </div>
            <div>
              <h4 className="text-xl text-amber-500 mb-2">LAMB TAGINE</h4>
              <p className="text-gray-400 italic">Braised Moroccan-style lamb, ras el hanout, dried apricots, veggies, rice, harissa.</p>
            </div>
            <div>
              <h4 className="text-xl text-amber-500 mb-2">POLLO A LA BRAVA</h4>
              <p className="text-gray-400 italic">Chicken, rice, vegetables, brava sauce.</p>
            </div>
            <div>
              <h4 className="text-xl text-amber-500 mb-2">FRESH HALIBUT ROMESCO</h4>
              <p className="text-gray-400 italic">Seared halibut, rice, vegetables, romesco sauce.</p>
            </div>
          </div>
        </div>

        {/* Tour de España */}
        <div className="border border-white p-8 text-center mb-16">
          <h3 className="text-2xl text-white mb-4">TOUR DE ESPAÑA FOR TWO</h3>
          <p className="text-gray-400">Mushroom soup, olives medley, jamón serrano, empanadas, patatas bravas, paella mixta, Basque cheesecake.</p>
        </div>

        {/* Postres */}
        <div className="mb-16">
          <h3 className="text-3xl font-light mb-8 text-white text-center uppercase border-b border-gray-800 pb-4">Postres</h3>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-xl text-amber-500 mb-2">BASQUE CHEESECAKE</h4>
            </div>
            <div>
              <h4 className="text-xl text-amber-500 mb-2">CHOCOLATE CAKE</h4>
            </div>
            <div>
              <h4 className="text-xl text-amber-500 mb-2">GELATO</h4>
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