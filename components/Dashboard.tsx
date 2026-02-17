
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line, AreaChart, Area 
} from 'recharts';
import { CHART_DATA, METRICS } from '../constants';

const Dashboard: React.FC = () => {
  return (
    <section id="metrics" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-fau-blue mb-4">The Impact of CMS Strategy</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quantifying the efficiency gains through our integrated logistics model for International Materials Inc.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {METRICS.map((metric, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{metric.name}</p>
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl font-bold text-fau-blue">{metric.value}{metric.unit}</span>
                <span className={`text-sm font-bold ${metric.change > 0 ? 'text-green-600' : 'text-fau-red'}`}>
                  {metric.change > 0 ? '↑' : '↓'} {Math.abs(metric.change)}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-fau-blue mb-6">Logistics Cost Optimization (USD)</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={CHART_DATA}>
                  <defs>
                    <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#003366" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#003366" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="logisticsCost" stroke="#003366" fillOpacity={1} fill="url(#colorCost)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold text-fau-blue mb-6">Fleet Operational Efficiency (%)</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CHART_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="efficiency" fill="#CC0000" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
