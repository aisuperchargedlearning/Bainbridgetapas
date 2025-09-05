import React from 'react';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
    <Navigation />
    <div className="min-h-screen bg-slate-900" style={{ backgroundColor: '#0A0E1A' }}>
      {/* Hero Content */}
      <div className="flex items-center justify-center min-h-screen">
        <img 
          src="https://ik.imagekit.io/a7tech/Bainbridge%20Bistro/Bainbridgebistrologo.jpg?updatedAt=1756830222667"
          alt="Bainbridge Bistro Logo"
          className="w-full h-full object-cover opacity-0 animate-fade-in"
        />
      </div>
    </div>

    {/* Next Section */}
    <section className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#2A364A' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-wide">
            Bainbridge Tapas is gone. This is the all new Bainbridge Bistro!
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8 opacity-60"></div>
          <p className="text-lg md:text-xl text-white opacity-90 leading-relaxed max-w-2xl mx-auto">
            This isn't a rebrand—it's a complete fresh start. Bainbridge Bistro is now open in a new location, offering elevated dining with Puget Sound seafood, craft cocktails, and genuine neighborhood hospitality.
          </p>
          <p className="text-lg md:text-xl text-white opacity-90 leading-relaxed max-w-2xl mx-auto mt-6">
            Our team is so excited for for this new chapter!
          </p>
        </div>
      </div>
    </section>

    {/* Experience Section */}
    <section className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#2A364A' }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-wide">
            Experience
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8 opacity-60"></div>
          <p className="text-lg md:text-xl text-white opacity-90 leading-relaxed max-w-2xl mx-auto">
            Welcome to our table, where the best moments unfold when good people gather around great food. Genuine island hospitality and the freshest ingredients we can find—no pretense, just an amazing dining experience!
          </p>
        </div>
      </div>
    </section>
    
    {/* Menu Title Section */}
    <section id="menu" className="py-8" style={{ backgroundColor: '#2A364A' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-widest" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            MENU
          </h2>
          <div className="w-24 h-px bg-white mx-auto opacity-60"></div>
        </div>
      </div>
    </section>

    {/* Antipasto Menu Section */}
    <section className="py-16" style={{ backgroundColor: '#2A364A' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-widest" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            ANTIPASTO
          </h2>
          <div className="w-16 h-0.5 mx-auto" style={{ backgroundColor: '#d4af37' }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-normal text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              KALE & FARRO SALAD
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Organic Bainbridge kale, farro, cucumber, tomatoes, olives, feta.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              CAESAR SALAD
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Romaine, parmesan, seasoned croutons, black pepper with garlic anchovy dressing.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              TOMATO & BURRATA
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Heirloom tomatoes, basil pesto, cucumbers, onions, olives.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              GAZPACHO ANDALUZ
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Traditional Spanish tomato cold soup, served with bread.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              ANTIPASTO PLATTER
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Assorted platter of cold cuts and cheeses with accompaniments, served with toasted bread.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              DIP TASTING PLATTER
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Home-made tzatziki, hummus, romesco, served with pita and baguette.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Tapas Menu Section */}
    <section className="py-16" style={{ backgroundColor: '#2A364A' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-widest" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            TAPAS
          </h2>
          <div className="w-16 h-0.5 mx-auto" style={{ backgroundColor: '#d4af37' }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              CAPRESE CROSTINI
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Tomatoes, basil pesto, creamy mozzarella, balsamic.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              MANILA CLAMS
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Fresh clams, brava sauce, bread.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              ARANCINI
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Spinach & ricotta filled risotto balls, spicy arrabbiata, parmesan.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SPINACH PIE
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Spinach, feta, phyllo dough, tzatziki.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              MEDITERRANEAN SCALLOPS
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Seared scallops, creamy garlic sauce, olives and feta, mini pitas.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              GAMBAS AL AJILLO
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Garlic shrimp, paprika, sherry, bread.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              EMPANADAS
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Ground beef, four cheese, harissa.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              WILD MUSHROOMS CAZUELA
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Fresh local wild mushrooms, garlic, sherry, served with bread.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              CAULIFLOWER
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Roasted cauliflower, lemon juice, paprika, almonds, romesco.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SALMON CANAPE
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Seasonal salmon, mascarpone, dill, bread.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Flatbreads Menu Section */}
    <section className="py-16" style={{ backgroundColor: '#2A364A' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-widest" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            FLATBREADS
          </h2>
          <div className="w-16 h-0.5 mx-auto" style={{ backgroundColor: '#d4af37' }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              CAPRESE
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Fresh mozzarella, basil pesto, tomatoes, balsamic.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              STEAK GORGONZOLA
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Sliced grilled steak, gorgonzola, red onions, mushrooms.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              CHICKEN HARISSA
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Free range chicken, harissa, onions, feta.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Fresh Pasta Menu Section */}
    <section className="py-16" style={{ backgroundColor: '#2A364A' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-widest" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            FRESH PASTA
          </h2>
          <div className="w-16 h-0.5 mx-auto" style={{ backgroundColor: '#d4af37' }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              TAGLIATELLE DI MARE
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Manila clams, shrimp, scallops, tomatoes, onions, garlic, basil pesto, parmesan.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              LEMON CHICK CAPELLINI
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Asparagus, tomatoes, onions, olives, lemon mascarpone sauce, pecorino.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              RAGU DI AGNELLO
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Braised lamb, red pepper pappardelle, ricotta cheese.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              WILD MUSHROOM RAVIOLI
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Wild mushrooms, onions, tomatoes, garlic, basil, roasted tomato sauce, gorgonzola.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Entree Menu Section */}
    <section className="py-16" style={{ backgroundColor: '#2A364A' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-widest" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            ENTREE
          </h2>
          <div className="w-16 h-0.5 mx-auto" style={{ backgroundColor: '#d4af37' }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              VEAL CHOP
            </h3>
            <p className="text-gray-300 leading-relaxed">
              16 oz. bone-in Steak, roasted potatoes, vegetables, gremolata.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              BISTECCA ALLA GORGONZOLA
            </h3>
            <p className="text-gray-300 leading-relaxed">
              8 oz Flat Iron, roasted potatoes, vegetables, gorgonzola sauce.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              PORK MARSALA
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Pork tenderloin, roasted vegetables, mashed potatoes, mushrooms marsala.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              SEARED HALIBUT
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Wild-caught Halibut, veggies, rice, saffron cream sauce, parmesan.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              LOBSTER RISOTTO
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Maine lobster tail, shrimp, asparagus, diced carrots, tomatoes, onions, parmesan.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              BOUILLABAISSE
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Fresh clams, scallops, fish, prawns, mirepoix, fennel, saffron, aioli, bread.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Dessert Menu Section */}
    <section className="py-16" style={{ backgroundColor: '#2A364A' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-widest" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            DESSERT
          </h2>
          <div className="w-16 h-0.5 mx-auto" style={{ backgroundColor: '#d4af37' }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              PISTACHIO CHEESECAKE
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Ricotta cheese, pistachio cream, berries compote.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              GELATO & SORBETTO
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Vanilla, pistachio, salted caramel, Vegan gelato and Mango sorbetto.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              TIRAMISU
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Espresso-soaked lady fingers layered with mascarpone.
            </p>
          </div>
          
          <div className="p-6 rounded-lg transition-all duration-200 hover:transform hover:scale-[1.02]" style={{ backgroundColor: '#384558' }}>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              BASQUE CHEESECAKE
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Gluten free Spanish cheese cake, berries compote.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Menu Disclaimer Section */}
    <section className="py-8" style={{ backgroundColor: '#2A364A' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
          <p className="text-gray-300 text-sm text-center leading-relaxed">
            <strong className="text-white">*</strong> Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of food borne illness. <strong className="text-white">*</strong> Automatic gratuity 20% gratuity will be added to parties of 6+. Please be aware that our food may contain or come into contact with common allergens, such as dairy, eggs, soybeans, tree nuts, peanuts, fish, shellfish or wheat. <strong className="text-white">Corkage fee $20.</strong>
          </p>
        </div>
      </div>
    </section>

    {/* Specialties Menu Section */}
    <section id="specialties" className="py-16" style={{ backgroundColor: '#2A364A' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-widest" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            SPECIALTIES
          </h2>
          <div className="w-16 h-0.5 mx-auto" style={{ backgroundColor: '#d4af37' }}></div>
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-6 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            NON-ALCOHOLIC BEVERAGES
          </h3>
          <p className="text-gray-300 text-lg">
            Content coming soon...
          </p>
        </div>
      </div>
    </section>

    {/* Hours Section */}
    <section id="hours" className="py-16" style={{ backgroundColor: '#2A364A' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-widest" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            HOURS
          </h2>
          <div className="w-16 h-0.5 mx-auto" style={{ backgroundColor: '#d4af37' }}></div>
        </div>
        
        <div className="text-center">
          <div className="text-gray-300 text-lg space-y-4">
            <div>
              <p className="font-semibold text-white mb-2">Monday through Thursday</p>
              <p>11AM to 2PM and 4PM to 9PM</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Friday</p>
              <p>11AM to 2PM and 4:30PM to 10PM</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Saturday</p>
              <p>4:30 to 10PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="py-16" style={{ backgroundColor: '#2A364A' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-widest" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            CONTACT
          </h2>
          <div className="w-16 h-0.5 mx-auto" style={{ backgroundColor: '#d4af37' }}></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold text-white mb-6 tracking-wide" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              RESERVATIONS & CONTACT
            </h3>
            <div className="text-gray-300 text-lg mb-4">
              <p className="mb-2">403 Madison Ave N</p>
              <p className="mb-4">Bainbridge Island, WA 98110</p>
              <p>(206) 460-4367</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="https://ik.imagekit.io/a7tech/Bainbridge%20Bistro/Maptobainbridgebistro.webp?updatedAt=1756841481532"
              alt="Map to Bainbridge Bistro"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    
    {/* Privacy Section */}
    <section className="py-8" style={{ backgroundColor: '#2A364A' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            We respect your privacy. This website does not collect personal information or use cookies to track visitors.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}

export default App;