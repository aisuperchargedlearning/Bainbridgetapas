import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  author: string;
  text: string;
}

export const Reviews = () => {
  const reviews: Review[] = [
    {
      author: "R. Dog",
      text: "After moving to BI, we decided to try Bainbridge Tapas. The food and sangria were delicious, and the service by the owner was warm and welcoming. Fair prices, and we'll definitely be returning often!"
    },
    {
      author: "M. Bradberry",
      text: "OMG!!! On our first visit, we tried half the menu and EVERYTHING was AMAZING. Highly recommend!"
    },
    {
      author: "S. Coggins",
      text: "Fantastic experience! Traveled from Seattle for a birthday dinner. Highly recommend stopping in!"
    },
    {
      author: "P. Prakash",
      text: "Extraordinary experience with a warm greeting by the owner, Sonja. The ambiance was captivating, and the service was exceptional."
    }
  ];

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <p className="text-amber-500 uppercase tracking-[0.2em] mb-4">What Our Guests Say</p>
        <h2 className="text-5xl font-light mb-6">Reviews from Google</h2>
        <div className="w-16 h-[1px] bg-amber-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {reviews.map((review, index) => (
          <div key={index} className="bg-[#2A2A2A] p-8">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">{review.text}</p>
            <p className="text-amber-500">— {review.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};