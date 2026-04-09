import React, { useState } from 'react';

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

const ChatInput = ({ onSend, isLoading }: ChatInputProps) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    onSend(input.trim());
    setInput('');
  };

  return (
    <div className="bg-[#0B0F19] border-t border-gray-800 p-4 md:p-6 sticky bottom-0 z-10 before:absolute before:inset-0 before:top-[-40px] before:bg-gradient-to-t before:from-[#0B0F19] before:to-transparent before:pointer-events-none">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto flex gap-3 relative z-10">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything about your codebase..."
          disabled={isLoading}
          className="flex-1 bg-[#111827] text-white placeholder-gray-500 rounded-xl px-5 py-4 border border-gray-800 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all shadow-inner"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold px-6 md:px-8 py-4 rounded-xl shadow-lg shadow-indigo-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px] active:scale-95"
        >
          {isLoading ? (
            <span className="flex items-center gap-1.5 h-6">
              <span className="w-2 h-2 rounded-full bg-white/80 animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-2 h-2 rounded-full bg-white/80 animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-2 h-2 rounded-full bg-white/80 animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </span>
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
