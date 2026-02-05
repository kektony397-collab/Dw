import React from 'react';
import { Stage, Theme } from '../types';
import { Landmark, Heart, Home } from 'lucide-react';

interface StageCardProps {
  stage: Stage;
  theme: Theme;
  index: number;
}

const StageCard: React.FC<StageCardProps> = ({ stage, theme, index }) => {
  const isAndroid = theme === 'android';

  const getIcon = () => {
    switch (stage.icon) {
      case 'bank': return <Landmark size={32} />;
      case 'heart': return <Heart size={32} />;
      case 'home': return <Home size={32} />;
      default: return <Landmark size={32} />;
    }
  };

  const androidClasses = "bg-[#f3edf7] text-[#1d1b20] rounded-[24px] border-none shadow-sm hover:shadow-md";
  const msClasses = "bg-white/70 backdrop-blur-md border border-gray-200 rounded-md shadow-sm hover:shadow-lg hover:-translate-y-1";

  const colorAccents = [
    isAndroid ? 'bg-[#e8def8] text-[#21005d]' : 'bg-blue-100 text-blue-700', // Stage 1
    isAndroid ? 'bg-[#ffd8e4] text-[#31111d]' : 'bg-red-100 text-red-700',   // Stage 2
    isAndroid ? 'bg-[#d7e3ff] text-[#001c3a]' : 'bg-green-100 text-green-700', // Stage 3
  ];

  return (
    <div 
      className={`p-6 transition-all duration-300 relative overflow-hidden group ${isAndroid ? androidClasses : msClasses} animate-slide-up`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500`}>
         {/* Large background icon decoration */}
         {React.cloneElement(getIcon() as React.ReactElement, { size: 120 })}
      </div>

      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className={`p-4 rounded-2xl ${colorAccents[index % 3]}`}>
          {getIcon()}
        </div>
        <span className={`text-sm font-bold px-3 py-1 rounded-full ${isAndroid ? 'bg-[#49454f] text-white' : 'bg-gray-800 text-white'}`}>
          {stage.year}
        </span>
      </div>

      <h3 className={`text-xl font-bold mb-1 relative z-10 ${isAndroid ? 'font-gujarati' : 'font-sans'}`}>
        {stage.title}
      </h3>
      <h4 className="text-md font-semibold opacity-70 mb-3 relative z-10">{stage.entity}</h4>
      
      <p className="text-sm opacity-80 mb-4 leading-relaxed relative z-10">
        {stage.description}
      </p>

      <ul className="space-y-2 relative z-10">
        {stage.steps.map((step, i) => (
          <li key={i} className="flex items-start text-sm">
            <span className={`mr-2 mt-1.5 w-1.5 h-1.5 rounded-full ${isAndroid ? 'bg-primary-500' : 'bg-blue-500'}`}></span>
            <span className="opacity-90">{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StageCard;
