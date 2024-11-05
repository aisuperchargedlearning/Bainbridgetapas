import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-[#2A2A2A] text-white py-12 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Bainbridge Tapas</h3>
            <div className="flex items-start gap-2 text-gray-400">
              <MapPin className="w-5 h-5 mt-1 text-amber-500" />
              <div>
                403 Madison Ave N #130<br />
                Bainbridge Island, WA 98110
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Hours</h3>
            <div className="text-gray-400">
              <div className="mb-4">
                <div className="text-amber-500">Lunch Hours</div>
                Tues.-Friday: 11am - 2pm
              </div>
              <div>
                <div className="text-amber-500">Dinner Hours</div>
                Tues.-Thurs.: 4:30-9:00 PM<br />
                Fri.-Sat.: 4:30-10:00 PM
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="flex items-center gap-2 text-gray-400 mb-3">
              <Phone className="w-5 h-5 text-amber-500" />
              <span>(206) 460-4367</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Bainbridge Tapas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};