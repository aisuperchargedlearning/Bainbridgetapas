import React from 'react';

export const SomethingNew = () => {
  return (
    <section className="py-16 bg-[#1A1A1A]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white">
            However, Something New Is Coming Soon!
          </h2>
          <div className="mt-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-light text-amber-500 mb-6">
              Introducing —Bainbridge Bistro.
            </h3>
            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              <p>
                This isn't a rebrand or evolution—it's a complete reimagining of what Bainbridge Island dining can be. Picture wild-caught Puget Sound seafood, an elevated craft cocktail program featuring the island's most innovative zero-proof selections, and a genuine neighborhood bistro where clean ingredients and authentic hospitality define every plate and pour.
              </p>
              <p>
                Bainbridge Bistro opens its doors this fall, ready to create new stories, new flavors, and new moments worth gathering for. This is dining without pretense, quality without compromise, and a table where everyone belongs.
              </p>
              <p className="text-amber-500 font-medium">
                Follow us here for info on our new location and opening details. The next chapter begins soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};