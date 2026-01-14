
import React, { useState } from 'react';
import { getFragranceAdvice } from '../geminiService';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<{ role: 'user' | 'model'; text: string }[]>([]);

  const handleSend = async () => {
    if (!query.trim()) return;
    
    const userMsg = query;
    setQuery('');
    setHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const advice = await getFragranceAdvice(userMsg);
    setHistory(prev => [...prev, { role: 'model', text: advice }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-20 right-24 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:bg-gray-800 transition-all transform hover:scale-110 border-2 border-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      ) : (
        <div className="bg-white w-80 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col h-[450px]">
          <div className="bg-black p-4 flex justify-between items-center text-white">
            <span className="font-playfair text-sm tracking-widest uppercase">Fragrance Advisor</span>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex-grow p-4 overflow-y-auto space-y-3 bg-gray-50 text-sm">
            {history.length === 0 && (
              <p className="text-gray-500 italic text-center mt-4">Ask me anything about our collections...</p>
            )}
            {history.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl ${msg.role === 'user' ? 'bg-black text-white' : 'bg-white border border-gray-200 text-gray-800 shadow-sm'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 p-3 rounded-xl animate-pulse text-gray-400">Thinking...</div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Suggest a summer scent..."
              className="flex-grow text-sm outline-none bg-gray-100 p-2 rounded-lg"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 disabled:bg-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;
