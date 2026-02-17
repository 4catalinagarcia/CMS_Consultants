
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-fau-blue overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://picsum.photos/seed/cargo-ship/1920/1080" 
          alt="Supply Chain Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-fau-red text-white mb-6">
              Official FAU Case Study 2024
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Optimizing Global Logistics for <span className="text-fau-red italic">International Materials Inc.</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-xl leading-relaxed">
              CMS Consultants presents a comprehensive supply chain strategy for IMI, leveraging data-driven insights to transform maritime operations and bulk commodity trading efficiency.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#metrics" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-fau-blue bg-white hover:bg-blue-50 transition-colors shadow-lg">
                View Key Results
              </a>
              <a href="#about" className="inline-flex justify-center items-center px-8 py-4 border-2 border-white text-lg font-bold rounded-md text-white hover:bg-white hover:text-fau-blue transition-all">
                The Case Methodology
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
             <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-fau-red to-fau-blue rounded-lg blur opacity-30"></div>
                <div className="relative bg-white p-2 rounded-lg shadow-2xl">
                   <img src="https://picsum.photos/seed/logistics-center/800/600" alt="Supply Chain Visualization" className="rounded-md w-full" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
