import React from 'react';
import { Gamepad2, Coins, Trophy } from 'lucide-react';

const TickerItem: React.FC<{ user: string; game: string; amount: string; type: 'win' | 'wager' }> = ({ user, game, amount, type }) => (
  <div className="flex items-center gap-3 px-6 py-2 border-r border-white/10 min-w-max">
    <div className={`p-1 rounded-full ${type === 'win' ? 'bg-green-500/20' : 'bg-blue-500/20'}`}>
        {type === 'win' ? <Trophy className="w-3 h-3 text-green-400" /> : <Gamepad2 className="w-3 h-3 text-blue-400" />}
    </div>
    <div className="flex flex-col text-xs">
        <span className="text-gray-400"><span className="text-white font-bold">{user}</span> {type === 'win' ? 'won' : 'wagered'} <span className={type === 'win' ? 'text-green-400 font-bold' : 'text-blue-400'}>{amount}</span></span>
        <span className="text-[10px] text-gray-600 uppercase">{game}</span>
    </div>
  </div>
);

const LiveTicker: React.FC = () => {
  const items = [
    { user: 'User882', game: 'Gates of Olympus', amount: '$520.50', type: 'win' },
    { user: 'CryptoKing', game: 'Sweet Bonanza', amount: '$1,200.00', type: 'win' },
    { user: 'Alice_Eth', game: 'Vault Unlock', amount: '$250.00', type: 'win' },
    { user: 'Jona99', game: 'Wanted Dead or a Wild', amount: '$20.00', type: 'wager' },
    { user: 'SatoshiDream', game: 'Sugar Rush', amount: '$5,000.00', type: 'win' },
    { user: 'PixelPunter', game: 'Vault Unlock', amount: '$100.00', type: 'win' },
    { user: 'LuckyDoge', game: 'Razor Shark', amount: '$85.00', type: 'wager' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 border-t border-orange-500/20 z-50 h-12 flex items-center overflow-hidden backdrop-blur-md">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        <div className="flex items-center gap-2 px-4 bg-orange-600/20 h-full border-r border-orange-500/20 z-20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">Live</span>
        </div>

        <div className="flex animate-scroll w-max hover:pause">
            {[...items, ...items, ...items].map((item, idx) => (
                <TickerItem key={idx} {...item} type={item.type as 'win' | 'wager'} />
            ))}
        </div>
    </div>
  );
};

export default LiveTicker;