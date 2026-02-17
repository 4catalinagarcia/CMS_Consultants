
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-fau-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">CMS Consultants</h2>
            <p className="text-blue-200 max-w-sm mb-6">
              A Florida Atlantic University initiative bridging the gap between academic theory and real-world supply chain excellence.
            </p>
            <div className="flex space-x-4">
               {/* Placeholders for Social/Academic Links */}
               <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center cursor-pointer transition-all">F</div>
               <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center cursor-pointer transition-all">L</div>
               <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 flex items-center justify-center cursor-pointer transition-all">X</div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-fau-red">Case Partners</h3>
            <ul className="space-y-4 text-blue-100">
              <li><a href="#" className="hover:text-white transition-colors">Florida Atlantic University</a></li>
              <li><a href="#" className="hover:text-white transition-colors">College of Business</a></li>
              <li><a href="#" className="hover:text-white transition-colors">International Materials Inc.</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Port Everglades Authority</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 text-fau-red">Contact</h3>
            <ul className="space-y-4 text-blue-100">
              <li>Boca Raton, FL</li>
              <li>cms-consulting@fau.edu</li>
              <li>(561) 555-0123</li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white border-opacity-10 text-center text-sm text-blue-300">
          <p>© 2024 CMS Consultants. All rights reserved. Prepared for FAU Supply Chain Management Practicum.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
