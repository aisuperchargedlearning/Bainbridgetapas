import React from 'react';
import { Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-4xl font-bold text-[#E5D3C8] mb-4">
            Connect With Us
          </h2>
          <p className="text-gray-400 mb-8">
            Contact us about engaging with us to help plan your project.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="text-[#E5D3C8]" />
              <div>
                <h3 className="text-white font-semibold">Call Us</h3>
                <p className="text-gray-400">(206) 601-4815</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}