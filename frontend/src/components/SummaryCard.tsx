
interface SummaryCardProps {
  summary: string;
  description: string;
}

const SummaryCard = ({ summary, description }: SummaryCardProps) => {
  return (
    <div className="bg-[#1F2937] rounded-xl p-6 md:p-8 shadow-xl shadow-black/20 border border-gray-800 transition-all hover:border-gray-700">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mr-4 border border-indigo-500/30">
          <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white tracking-wide">AI Summary</h3>
      </div>
      
      <div className="space-y-6">
        <div className="p-4 rounded-lg bg-[#111827]/50 border border-indigo-500/10">
          <p className="text-indigo-200 font-medium text-lg leading-relaxed">
            {summary}
          </p>
        </div>
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SummaryCard;
