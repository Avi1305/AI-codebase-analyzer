
import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
  role: 'user' | 'ai';
  content: string;
}

const ChatMessage = ({ role, content }: ChatMessageProps) => {
  const isUser = role === 'user';
  
  return (
    <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-6`}>
      <div className={`w-full max-w-3xl rounded-2xl p-5 md:p-6 shadow-xl ${
        isUser 
          ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-tr-sm' 
          : 'bg-[#1F2937] text-gray-200 border border-gray-800 rounded-tl-sm'
      }`}>
        {isUser ? (
          <div className="whitespace-pre-wrap leading-relaxed text-[15px]">{content}</div>
        ) : (
          <div className="text-gray-300 leading-relaxed overflow-x-auto space-y-3 prose-sm md:prose-base">
            <ReactMarkdown
              components={{
                code({node, inline, className, children, ...props}: any) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline ? (
                    <div className="bg-[#111827] rounded-lg p-4 my-4 overflow-x-auto border border-gray-800 shadow-inner">
                      <code className={className} {...props}>
                        {children}
                      </code>
                    </div>
                  ) : (
                    <code className="bg-[#111827] text-indigo-300 px-1.5 py-0.5 rounded text-sm font-mono border border-gray-800" {...props}>
                      {children}
                    </code>
                  )
                },
                p: ({children}) => <p className="mb-3 last:mb-0">{children}</p>,
                ul: ({children}) => <ul className="list-disc pl-5 mb-3 space-y-1">{children}</ul>,
                ol: ({children}) => <ol className="list-decimal pl-5 mb-3 space-y-1">{children}</ol>,
                li: ({children}) => <li className="mb-1">{children}</li>,
                h1: ({children}) => <h1 className="text-xl font-bold text-white mb-3 mt-4">{children}</h1>,
                h2: ({children}) => <h2 className="text-lg font-bold text-white mb-2 mt-4">{children}</h2>,
                h3: ({children}) => <h3 className="text-base font-bold text-white mb-2 mt-3">{children}</h3>,
                a: ({children, href}) => <a href={href} className="text-indigo-400 hover:text-indigo-300 underline font-medium">{children}</a>,
                blockquote: ({children}) => <blockquote className="border-l-4 border-indigo-500 pl-4 py-1 italic text-gray-400 bg-indigo-500/5 rounded-r-lg my-3">{children}</blockquote>
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
