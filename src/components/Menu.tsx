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
                <h4 className="text-xl text-amber-500 mb-2">Sangria</h4>
                <p className="text-gray-400 italic">Red wine, maple syrup, brandy, cider, fresh grape fruit</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">Andalucia</h4>
                <p className="text-gray-400 italic">Tequila, guava nectar, lime juice, triple sec, rim with tajin</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">Palomino</h4>
                <p className="text-gray-400 italic">Rum, fresh pineapple, coconut purée</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">Jilipollas</h4>
                <p className="text-gray-400 italic">Bourbon, orange, aromatic bitter, orange peel, smoked glass</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-amber-500 mb-2">El Guapo O'</h4>
                <p className="text-gray-400 italic">Vodka, grapefruit juice, ginger beer, lime juice</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">Tinto de Verano</h4>
                <p className="text-gray-400 italic">Whiskey, sweet vermouth, orange bitters, cherry garnish</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">Anchor Negroni</h4>
                <p className="text-gray-400 italic">Campari, anchaeta tea, sweet vermouth, splash lager</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">Poirier Punch</h4>
                <p className="text-gray-400 italic">Rum, simple syrup, lime, Peychaud's bitters</p>
              </div>
            </div>
          </div>
        </div>

        {/* Non-Alcoholic */}
        <div className="mb-16">
          <h3 className="text-3xl font-light mb-8 text-white text-center uppercase border-b border-gray-800 pb-4">Non-Alcoholic Beverages</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-amber-500 mb-2">EMELITA</h4>
                <p className="text-gray-400 italic">Strawberry, mint, lime, simple syrup, soda water</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">SONA SPRITZ</h4>
                <p className="text-gray-400 italic">Non-alcoholic sparkling wine, orange, grapefruit</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">REJUITO</h4>
                <p className="text-gray-400 italic">Fresh fruit, lemon, syrup, mint, soda; choose pineapple, cucumber, or guava</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">ESTRELLA – LAGER</h4>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">HOP WATER – INQUIRE ABOUT FLAVORS</h4>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">CIDER – INQUIRE ABOUT OUR FLAVORS</h4>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-amber-500 mb-2">GRUVI – MOCHA NITRO STOUT</h4>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">PARTAKE – IPA OR BLONDE</h4>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">ITALIAN SODA – STRAWBERRY OR VANILLA</h4>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">VINADA – CAVA ROSÉ, SPAIN</h4>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">RED WINE – TEMPRANILLO, SPAIN</h4>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">WHITE WINE – VERDEJO, SPAIN</h4>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">VEGA MEDIEN – VEGAN BUBBLES, SPAIN</h4>
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
                <h4 className="text-xl text-amber-500 mb-2">HOUSE SALAD</h4>
                <p className="text-gray-400 italic">Seasonal lettuce, heirloom tomatoes, olives, cucumber, feta, house vinaigrette</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">GAZPACHO ANDALUZ</h4>
                <p className="text-gray-400 italic">Traditional Spanish tomato cold soup, served with bread</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">HUMMUS</h4>
                <p className="text-gray-400 italic">Served with za'atar pita</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">MARCONA ALMONDS</h4>
                <p className="text-gray-400 italic">Roasted marcona almonds, paprika</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-amber-500 mb-2">OLIVES MEDLEY</h4>
                <p className="text-gray-400 italic">Manzanilla, castelvetrano, cerignola, herbs</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">BOQUERONES</h4>
                <p className="text-gray-400 italic">Spanish anchovies, tomatoes, bread</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">JAMON SERRANO</h4>
                <p className="text-gray-400 italic">Fermin ham, bread, tomato pulp</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">MANCHEGO & MEMBRILLO</h4>
                <p className="text-gray-400 italic">Quince paste, olive oil, bread</p>
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
                <h4 className="text-xl text-amber-500 mb-2">GAMBAS AL AJILLO</h4>
                <p className="text-gray-400 italic">Garlic shrimp, paprika, sherry, bread.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">LAMB CHOPS</h4>
                <p className="text-gray-400 italic">Roasted potatoes, harissa sauce.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">LAMB MINI PITAS</h4>
                <p className="text-gray-400 italic">Braised lamb, onion, harissa.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">CLAMS</h4>
                <p className="text-gray-400 italic">Fresh clams, brava sauce, bread.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">GARBANZO CON CHORIZO</h4>
                <p className="text-gray-400 italic">Local green garbanzo, Spanish chorizo.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">PATATAS BRAVAS</h4>
                <p className="text-gray-400 italic">Roasted potatoes, brava sauce, aioli.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl text-amber-500 mb-2">CAULIFLOWER</h4>
                <p className="text-gray-400 italic">Roasted cauliflower, lemon juice, paprika, romesco.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">WILD MUSHROOMS CAZUELA</h4>
                <p className="text-gray-400 italic">Fresh local wild mushrooms, garlic, sherry, mushrooms with bread.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">PINCHO MORUNO</h4>
                <p className="text-gray-400 italic">Pork skewer, blue cheese sauce.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">SPANAKOPITA (SPINACH PIE)</h4>
                <p className="text-gray-400 italic">Spinach, feta cheese, phyllo dough, tzatziki.</p>
              </div>
              <div>
                <h4 className="text-xl text-amber-500 mb-2">EMPANADAS</h4>
                <p className="text-gray-400 italic">Ground beef, four cheese, harissa.</p>
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
              <p className="text-gray-400 italic">Spanish chorizo, Manila clams, chicken, prawns, saffron broth, rice, paprika, aioli. (Please allow 45–60 min.)</p>
            </div>
            <div>
              <h4 className="text-xl text-amber-500 mb-2">POLLO A LA BRAVA</h4>
              <p className="text-gray-400 italic">Free range chicken, potatoes, veggies, brava sauce</p>
            </div>
            <div>
              <h4 className="text-xl text-amber-500 mb-2">LAMB TAGINE</h4>
              <p className="text-gray-400 italic">Braised Moroccan-style lamb, ras el hanout, dried apricots, veggies, rice and harissa</p>
            </div>
            <div>
              <h4 className="text-xl text-amber-500 mb-2">FRESH HALIBUT ROMESCO</h4>
              <p className="text-gray-400 italic">Seared halibut, rice, veggies, romesco sauce</p>
            </div>
          </div>
        </div>

        {/* Postres */}
        <div className="mb-16">
          <h3 className="text-3xl font-light mb-8 text-white text-center uppercase border-b border-gray-800 pb-4">Dessert</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl text-amber-500 mb-2">BASQUE CHEESECAKE</h4>
              <p className="text-gray-400 italic">Gluten-free Spanish cheesecake, berries compote</p>
            </div>
            <div>
              <h4 className="text-xl text-amber-500 mb-2">GELATO</h4>
              <p className="text-gray-400 italic">Please inquire about the selection of flavors</p>
            </div>
            <div>
              <h4 className="text-xl text-amber-500 mb-2">CHOCOLATE MOUSSE</h4>
              <p className="text-gray-400 italic">Chocolate hazelnut, dark chocolate</p>
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