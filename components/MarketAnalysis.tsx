import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import { REVENUE_DATA } from '../constants';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 border border-white/10 p-4 rounded-lg shadow-xl">
        <p className="text-gray-400 text-sm mb-1">{label}</p>
        <p className="text-white font-bold text-lg">
          ${payload[0].value}M
        </p>
      </div>
    );
  }
  return null;
};

const MarketAnalysis: React.FC = () => {
  return (
    <section id="market" className="py-24 bg-casino-dark relative">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-2">Market Opportunity</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Explosive Growth Trajectory</h3>
            <p className="text-gray-400 mt-4 text-lg">
              The intersection of traditional gambling and blockchain technology creates a new paradigm for trustless betting, projected to capture 15% of the global market by 2028.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Revenue Chart */}
          <div className="lg:col-span-2 glass-panel rounded-2xl p-8 border-t border-purple-500/20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h4 className="text-xl font-bold text-white">Revenue Projection</h4>
                <p className="text-sm text-gray-500">Estimated annual revenue (USD Millions)</p>
              </div>
              <TrendingUp className="text-green-400 w-6 h-6" />
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={REVENUE_DATA}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="year" stroke="#666" axisLine={false} tickLine={false} />
                  <YAxis stroke="#666" axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}M`} />
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#7c3aed', strokeWidth: 1 }} />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Key Metrics Cards */}
          <div className="flex flex-col gap-8">
            <div className="glass-panel p-8 rounded-2xl flex-1 flex flex-col justify-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                <Users className="text-blue-400 w-6 h-6" />
              </div>
              <h4 className="text-4xl font-bold text-white mb-1">4.5M+</h4>
              <p className="text-gray-400 font-medium">Projected Users by 2028</p>
              <div className="mt-4 h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[75%]"></div>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl flex-1 flex flex-col justify-center">
               <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="text-green-400 w-6 h-6" />
              </div>
              <h4 className="text-4xl font-bold text-white mb-1">$260B</h4>
              <p className="text-gray-400 font-medium">TAM (Total Addressable Market)</p>
              <div className="mt-4 h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-[45%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketAnalysis;