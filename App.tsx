
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Footer from './components/Footer.tsx';
import { TEAM } from './constants.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />

        {/* Team Section */}
        <section id="team" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-fau-red font-bold uppercase tracking-widest text-sm mb-4 block">Our Experts</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-fau-blue mb-4">The Consultants</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Expertise from Florida Atlantic University’s top Supply Chain Management talent leading the IMI Case Study.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {TEAM.map((member, i) => (
                <div key={i} className="group text-center">
                  <div className="relative mb-6 inline-block">
                    <div className="absolute inset-0 bg-fau-red rounded-full translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform -z-10 opacity-20"></div>
                    <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-fau-blue">{member.name}</h3>
                  <p className="text-fau-red font-semibold mb-4 tracking-wide uppercase text-xs">{member.role}</p>
                  <p className="text-gray-600 px-4 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
