
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Dashboard from './components/Dashboard.tsx';
import Footer from './components/Footer.tsx';
import { TEAM } from './constants.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />

        {/* Challenge Section */}
        <section id="challenge" className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="mb-12 lg:mb-0">
                <span className="text-fau-red font-bold uppercase tracking-widest text-sm mb-4 block">The Mission</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-fau-blue mb-8">Disrupting Bulk Commodity Logistics</h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    International Materials Inc. (IMI) operates a complex web of global supply chains, transporting millions of tonnes of industrial minerals annually. The challenge was clear: high freight volatility and port congestion were eroding margins.
                  </p>
                  <p>
                    Our team at CMS Consultants developed a multi-layered approach using <strong>Stochastic Vessel Scheduling</strong> and <strong>Port Throughput Optimization</strong> to stabilize operational flow.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="border-l-4 border-fau-red pl-4">
                      <h4 className="font-bold text-fau-blue">Resiliency</h4>
                      <p className="text-sm">Built to withstand geopolitical shifts in shipping lanes.</p>
                    </div>
                    <div className="border-l-4 border-fau-red pl-4">
                      <h4 className="font-bold text-fau-blue">Sustainability</h4>
                      <p className="text-sm">Reducing carbon intensity per tonne-mile by 12%.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/dock-worker/600/800" 
                  alt="Port Operations" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-fau-red p-8 rounded-2xl shadow-xl hidden sm:block">
                  <p className="text-white font-bold text-4xl">IMI</p>
                  <p className="text-white text-xs opacity-80 font-semibold tracking-widest uppercase">Global Partner</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Dashboard />

        {/* Team Section */}
        <section id="team" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-fau-blue mb-4">The Consultants</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Expertise from Florida Atlantic University’s top Supply Chain Management talent.</p>
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
