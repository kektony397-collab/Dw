import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Theme, Language } from './types';
import { CONTENT } from './constants';
import StageCard from './components/StageCard';
import { 
  Settings, 
  User, 
  Activity, 
  ShieldCheck, 
  Wrench, 
  Eye, 
  Send,
  Menu,
  X,
  Languages
} from 'lucide-react';
import { getGeminiAdvice } from './services/geminiService';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('android');
  const [lang, setLang] = useState<Language>('gu');
  const [activeTab, setActiveTab] = useState<'roadmap' | 'management' | 'action' | 'advisor'>('roadmap');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // AI State
  const [question, setQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const t = CONTENT[lang];

  const handleAskAI = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAiResponse('');
    const context = `Phase 1: ${t.stages[0].entity}, Phase 2: ${t.stages[1].entity}, Phase 3: ${t.stages[2].entity}. Core Idea: Zero Maintenance via shop rent.`;
    const response = await getGeminiAdvice(question, lang, context);
    setAiResponse(response);
    setLoading(false);
  };

  // Theme Classes
  const bgClass = theme === 'android' 
    ? 'bg-[#fef7ff] text-[#1d1b20]' 
    : 'bg-[#f0f2f5] text-gray-900';
  
  const navClass = theme === 'android'
    ? 'bg-[#f3edf7] text-[#1d1b20] rounded-b-[32px]'
    : 'bg-white/80 backdrop-blur-md border-b border-gray-200';

  const buttonClass = (isActive: boolean) => {
    if (theme === 'android') {
      return isActive 
        ? 'bg-[#e8def8] text-[#1d1b20] font-bold px-6 py-3 rounded-full transition-all' 
        : 'text-[#49454f] px-6 py-3 rounded-full hover:bg-[#f3edf7] transition-all';
    } else {
      return isActive
        ? 'border-b-2 border-[#0078d4] text-[#0078d4] font-semibold px-4 py-3 transition-all'
        : 'text-gray-600 px-4 py-3 hover:text-gray-900 transition-all';
    }
  };

  return (
    <div className={`min-h-screen ${bgClass} font-sans transition-colors duration-500 overflow-x-hidden`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${navClass} transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
               <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2">
                 <Menu size={24} />
               </button>
               <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${theme === 'android' ? 'bg-indigo-100 text-indigo-800' : 'bg-blue-600 text-white shadow-md'}`}>
                 <span className="font-bold text-xl">Y</span>
               </div>
               <div>
                 <h1 className={`text-lg font-bold leading-tight ${lang === 'gu' ? 'font-gujarati' : ''}`}>{t.title}</h1>
                 <p className="text-xs opacity-60">Vision 2026</p>
               </div>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden lg:flex space-x-2">
              <button onClick={() => setActiveTab('roadmap')} className={buttonClass(activeTab === 'roadmap')}>{t.tabs.roadmap}</button>
              <button onClick={() => setActiveTab('management')} className={buttonClass(activeTab === 'management')}>{t.tabs.management}</button>
              <button onClick={() => setActiveTab('action')} className={buttonClass(activeTab === 'action')}>{t.tabs.action}</button>
              <button onClick={() => setActiveTab('advisor')} className={buttonClass(activeTab === 'advisor')}>{t.tabs.advisor}</button>
            </div>

            {/* Settings */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setLang(l => l === 'gu' ? 'en' : l === 'en' ? 'hi' : 'gu')}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg ${theme === 'android' ? 'bg-[#e8def8]' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                <Languages size={18} />
                <span className="uppercase font-bold text-xs">{lang}</span>
              </button>
              
              <button 
                onClick={() => setTheme(t => t === 'android' ? 'microsoft' : 'android')}
                className={`p-2 rounded-full ${theme === 'android' ? 'bg-[#d0bcff] text-[#381e72]' : 'bg-[#0078d4] text-white shadow-sm'}`}
              >
                <Settings size={20} className={theme === 'android' ? 'animate-spin-slow' : ''} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-[60] transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:hidden`}>
        <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)}></div>
        <div className={`absolute left-0 top-0 h-full w-3/4 max-w-xs ${theme === 'android' ? 'bg-[#f3edf7]' : 'bg-white'} p-6 shadow-2xl`}>
          <div className="flex justify-between items-center mb-8">
             <h2 className="text-xl font-bold">{t.title}</h2>
             <button onClick={() => setSidebarOpen(false)}><X /></button>
          </div>
          <div className="flex flex-col gap-4">
              <button onClick={() => { setActiveTab('roadmap'); setSidebarOpen(false); }} className={`text-left ${buttonClass(activeTab === 'roadmap')}`}>{t.tabs.roadmap}</button>
              <button onClick={() => { setActiveTab('management'); setSidebarOpen(false); }} className={`text-left ${buttonClass(activeTab === 'management')}`}>{t.tabs.management}</button>
              <button onClick={() => { setActiveTab('action'); setSidebarOpen(false); }} className={`text-left ${buttonClass(activeTab === 'action')}`}>{t.tabs.action}</button>
              <button onClick={() => { setActiveTab('advisor'); setSidebarOpen(false); }} className={`text-left ${buttonClass(activeTab === 'advisor')}`}>{t.tabs.advisor}</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-28 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Welcome Header */}
        <div className="mb-10 text-center animate-slide-up">
          <div className={`inline-block px-4 py-1 mb-4 rounded-full text-sm font-medium ${theme === 'android' ? 'bg-green-100 text-green-800' : 'bg-blue-50 text-blue-600 border border-blue-100'}`}>
            {t.welcome}
          </div>
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${lang === 'gu' ? 'font-gujarati' : ''} leading-relaxed`}>
            {t.subtitle}
          </h2>
          <p className="text-lg opacity-60 max-w-2xl mx-auto">{t.vision}</p>
        </div>

        {/* Tab Content */}
        
        {/* ROADMAP */}
        {activeTab === 'roadmap' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.stages.map((stage, index) => (
              <StageCard key={stage.id} stage={stage} theme={theme} index={index} />
            ))}
          </div>
        )}

        {/* MANAGEMENT */}
        {activeTab === 'management' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.management.rules.map((rule, idx) => {
              const icons = { wrench: Wrench, shield: ShieldCheck, eye: Eye };
              const Icon = icons[rule.icon as keyof typeof icons];
              return (
                <div key={idx} className={`p-8 ${theme === 'android' ? 'bg-[#fff] rounded-[32px]' : 'bg-white rounded-lg shadow-sm border border-gray-100'} animate-slide-up`} style={{animationDelay: `${idx * 100}ms`}}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${theme === 'android' ? 'bg-[#d0bcff] text-[#381e72]' : 'bg-blue-50 text-blue-600'}`}>
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{rule.title}</h3>
                  <p className="opacity-70 leading-relaxed">{rule.description}</p>
                </div>
              );
            })}
          </div>
        )}

        {/* ACTION PLAN */}
        {activeTab === 'action' && (
          <div className={`max-w-2xl mx-auto p-8 ${theme === 'android' ? 'bg-[#2b2930] text-white rounded-[32px]' : 'bg-white border border-gray-200 shadow-lg rounded-xl'} animate-slide-up`}>
            <div className="flex items-center gap-4 mb-8">
              <Activity className={theme === 'android' ? 'text-[#d0bcff]' : 'text-blue-600'} size={32} />
              <h3 className="text-2xl font-bold">{t.actions.title}</h3>
            </div>
            <div className="space-y-6">
              {t.actions.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${theme === 'android' ? 'bg-[#4a4458] text-[#e8def8]' : 'bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors'}`}>
                    {idx + 1}
                  </div>
                  <p className={`text-lg pt-0.5 ${theme === 'android' ? 'text-[#cac4d0]' : 'text-gray-700'}`}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI ADVISOR */}
        {activeTab === 'advisor' && (
          <div className={`max-w-3xl mx-auto h-[600px] flex flex-col ${theme === 'android' ? 'bg-white rounded-[32px] border border-gray-100' : 'bg-white rounded-xl shadow-xl border border-gray-200'} overflow-hidden animate-slide-up`}>
             <div className={`p-6 border-b ${theme === 'android' ? 'bg-[#f3edf7]' : 'bg-gray-50'}`}>
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white">
                   AI
                 </div>
                 <div>
                   <h3 className="font-bold">{t.ai.title}</h3>
                   <p className="text-xs opacity-60">Powered by Gemini 3</p>
                 </div>
               </div>
             </div>
             
             <div className="flex-1 p-6 overflow-y-auto bg-gray-50/50">
               {!aiResponse && !loading && (
                 <div className="h-full flex flex-col items-center justify-center opacity-40 text-center">
                   <User size={48} className="mb-4" />
                   <p>{t.ai.placeholder}</p>
                 </div>
               )}
               
               {loading && (
                 <div className="flex justify-center items-center h-full">
                   <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                 </div>
               )}

               {aiResponse && (
                 <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex-shrink-0"></div>
                    <div className={`p-4 rounded-2xl rounded-tl-none ${theme === 'android' ? 'bg-[#e8def8] text-[#1d1b20]' : 'bg-white shadow-sm border border-gray-100'}`}>
                      <p className="whitespace-pre-line leading-relaxed">{aiResponse}</p>
                    </div>
                 </div>
               )}
             </div>

             <div className="p-4 border-t bg-white">
               <div className="flex gap-2">
                 <input 
                    type="text" 
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder={t.ai.placeholder}
                    className={`flex-1 p-4 rounded-full outline-none ${theme === 'android' ? 'bg-[#f3edf7] focus:bg-[#e8def8]' : 'bg-gray-100 focus:bg-white border focus:ring-2 ring-blue-500/20'}`}
                    onKeyPress={(e) => e.key === 'Enter' && handleAskAI()}
                 />
                 <button 
                  onClick={handleAskAI}
                  disabled={loading || !question}
                  className={`p-4 rounded-full transition-transform active:scale-95 disabled:opacity-50 ${theme === 'android' ? 'bg-[#6750a4] text-white' : 'bg-blue-600 text-white shadow-md'}`}
                 >
                   <Send size={20} />
                 </button>
               </div>
               <p className="text-[10px] text-center mt-2 opacity-50">{t.ai.disclaimer}</p>
             </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default App;
