import React from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { ROADMAP } from '../constants';

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 bg-casino-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
             <div>
                <h2 className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-2">Execution Plan</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-white">Strategic Roadmap</h3>
             </div>
             <button className="mt-4 md:mt-0 px-6 py-2 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-colors rounded-lg text-sm font-bold uppercase">
                View Full Whitepaper
             </button>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-purple-900 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {ROADMAP.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Card */}
                <div className="flex-1 pl-20 md:pl-0">
                   <div className={`p-8 glass-panel rounded-2xl border-l-4 ${item.status === 'completed' ? 'border-green-500' : item.status === 'current' ? 'border-purple-500' : 'border-gray-700'} hover:bg-white/5 transition-colors`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-xs font-bold uppercase tracking-wider ${item.status === 'completed' ? 'text-green-400' : 'text-purple-400'}`}>
                            {item.phase}
                        </span>
                        <span className="text-sm text-gray-500 font-mono">{item.date}</span>
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                   </div>
                </div>

                {/* Center Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-casino-black border-4 border-casino-dark z-10">
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                       item.status === 'completed' ? 'bg-green-500 shadow-lg shadow-green-500/20' : 
                       item.status === 'current' ? 'bg-purple-500 shadow-lg shadow-purple-500/20 animate-pulse' : 
                       'bg-gray-800'
                   }`}>
                        {item.status === 'completed' ? <CheckCircle2 className="w-6 h-6 text-white" /> : 
                         item.status === 'current' ? <Clock className="w-6 h-6 text-white" /> : 
                         <Circle className="w-5 h-5 text-gray-500" />}
                   </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;