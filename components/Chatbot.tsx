
import React, { useState, useRef, useEffect } from 'react';
import { getConsultingAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to CMS Consultants. I can help answer questions regarding our supply chain strategy for IMI. How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsLoading(true);

    const aiResponse = await getConsultingAdvice(userText);
    setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <section id="chat" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col h-[600px]">
          <div className="bg-fau-blue p-6 text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-fau-red rounded-full flex items-center justify-center font-bold text-white">AI</div>
              <div>
                <h3 className="font-bold">Consulting Intelligence</h3>
                <p className="text-xs text-blue-200">Online • Expert in IMI Supply Chain</p>
              </div>
            </div>
            <div className="text-xs font-semibold px-2 py-1 bg-white bg-opacity-10 rounded">Gemini Flash Powered</div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-fau-blue text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-fau-red rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-fau-red rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-fau-red rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100 flex items-center space-x-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about maritime logistics, port operations, or ROI..."
              className="flex-1 px-5 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-fau-blue text-sm"
              disabled={isLoading}
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="bg-fau-red text-white p-3 rounded-full hover:bg-opacity-90 transition-colors shadow-lg disabled:opacity-50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
