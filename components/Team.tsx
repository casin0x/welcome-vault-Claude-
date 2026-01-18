import React from 'react';
import { TEAM } from '../constants';
import { Linkedin, Twitter } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-casino-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-2">Leadership</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Built by Veterans</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, index) => (
            <div key={index} className="group relative">
               {/* Card */}
               <div className="glass-panel p-6 rounded-2xl h-full relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full p-1 bg-gradient-to-tr from-purple-500 to-pink-500">
                    <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full rounded-full object-cover border-4 border-casino-black"
                    />
                  </div>
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-white">{member.name}</h4>
                    <p className="text-purple-400 text-sm font-medium">{member.role}</p>
                  </div>
                  <p className="text-gray-400 text-sm text-center leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <div className="flex items-center justify-center gap-4 pt-6 border-t border-white/5">
                    <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors"><Twitter className="w-5 h-5" /></a>
                    <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors"><Linkedin className="w-5 h-5" /></a>
                  </div>
               </div>
               
               {/* Hover Glow */}
               <div className="absolute inset-0 bg-purple-600/20 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;