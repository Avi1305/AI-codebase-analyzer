

interface TechStackProps {
  techStack: string[];
}

const TechStack = ({ techStack }: TechStackProps) => {
  if (!techStack || techStack.length === 0) return null;

  return (
    <div className="bg-[#1F2937] rounded-xl p-6 md:p-8 shadow-xl shadow-black/20 border border-gray-800 flex-1">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3 border border-purple-500/30">
          <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-white">Detected Technologies</h3>
      </div>
      
      <div className="flex flex-wrap gap-2.5">
        {techStack.map((tech, index) => (
          <span 
            key={index} 
            className="px-4 py-2 rounded-full bg-[#111827] border border-gray-700 text-gray-300 text-sm font-medium hover:border-purple-500/50 hover:text-purple-300 transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
