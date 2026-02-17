
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-fau-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-fau-blue tracking-tight">CMS <span className="text-fau-red">Consultants</span></span>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">FAU Supply Chain Excellence</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-fau-blue font-medium transition-colors">About</a>
            <a href="#challenge" className="text-gray-600 hover:text-fau-blue font-medium transition-colors">The Challenge</a>
            <a href="#metrics" className="text-gray-600 hover:text-fau-blue font-medium transition-colors">Insights</a>
            <a href="#team" className="text-gray-600 hover:text-fau-blue font-medium transition-colors">The Team</a>
          </nav>
          <div className="md:hidden">
            <button className="text-fau-blue">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
