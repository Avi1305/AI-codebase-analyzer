import { useState, useRef, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';
import { sendChat } from '../services/chat.api';

export interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
}

const INITIAL_GREETING: Message = {
  id: 'initial-greeting',
  role: 'ai',
  content: 'Hello 👋 Ask anything about your codebase.'
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 3. ADD CHAT PERSISTENCE (Load messages on mount)
  useEffect(() => {
    try {
      const stored = localStorage.getItem('chatHistory');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.length > 0) {
          setMessages(parsed);
        } else {
          setMessages([INITIAL_GREETING]);
        }
      } else {
        setMessages([INITIAL_GREETING]);
      }
    } catch (e) {
      console.error("Failed to load chat history", e);
      setMessages([INITIAL_GREETING]);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // 3. ADD CHAT PERSISTENCE (Save messages on update)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('chatHistory', JSON.stringify(messages));
    }
  }, [messages, isInitialized]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (messageContent: string) => {
    // 4. PREVENT DUPLICATE REQUESTS
    if (isLoading || !messageContent.trim()) return;

    // 2. ADD UNIQUE MESSAGE IDs
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageContent
    };

    // 1. FIX STATE MANAGEMENT BUG (Functional updates)
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // 7. CREATE CLEAN API LAYER
      const response = await sendChat(messageContent);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(), // +1 ensures unique ID from user message if execution is fast
        role: 'ai',
        content: response.data.answer
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      // 5. IMPROVE ERROR HANDLING
      console.error('Chat API Error:', error);
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: '⚠️ Sorry, I encountered an error formatting this response. Please check your backend connection.'
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // 6. ADD "CLEAR CHAT" FEATURE
  const handleClearChat = () => {
    if (window.confirm("Are you sure you want to clear the chat history?")) {
      setMessages([INITIAL_GREETING]);
      localStorage.removeItem('chatHistory');
    }
  };

  if (!isInitialized) return null; // Avoid hydration flash

  return (
    <div className="flex h-screen bg-[#0B0F19] text-white overflow-hidden font-sans selection:bg-indigo-500/30">
      <Sidebar />
      
      <div className="flex-1 flex flex-col h-full relative">
        <header className="px-6 py-5 md:px-8 border-b border-gray-800 bg-[#0B0F19]/90 backdrop-blur-md sticky top-0 z-10 shrink-0">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 shadow-inner">
                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </span>
              Chat with Codebase
            </h2>
            
            {/* Added Clear Chat UI Element */}
            <button 
              onClick={handleClearChat}
              className="text-sm font-medium text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors border border-gray-700/50 active:scale-95"
            >
              Clear Chat
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
          <div className="max-w-4xl mx-auto flex flex-col pt-4">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} role={msg.role} content={msg.content} />
            ))}
            
            {isLoading && (
              <div className="flex w-full justify-start mb-6 animate-pulse">
                <div className="bg-[#1F2937] text-gray-400 border border-gray-800 px-6 py-5 rounded-2xl rounded-tl-sm flex items-center gap-3 max-w-[200px] shadow-lg">
                   <div className="flex gap-1.5 h-full items-center">
                     <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                     <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                     <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                   </div>
                   <span className="ml-2 font-medium text-sm text-indigo-300/80 tracking-wide">AI is thinking...</span>
                </div>
              </div>
            )}
            {/* Invisible div to scroll to bottom */}
            <div ref={messagesEndRef} className="h-4" />
          </div>
        </main>

        <ChatInput onSend={handleSend} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Chat;
