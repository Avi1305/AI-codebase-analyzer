import  { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import SummaryCard from '../components/SummaryCard';
import TechStack from '../components/TechStack';
import FileList from '../components/FileList';

interface AnalysisData {
  success: boolean;
  totalFiles: number;
  summary: {
    summary: string;
    techStack: string[];
    description: string;
  };
  files: { filePath: string; content: string }[];
}

const Dashboard = () => {
  const [data, setData] = useState<AnalysisData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mimic slight network delay for better UX and smooth loading animations
    const timer = setTimeout(() => {
      try {
        const storedData = localStorage.getItem("analysis");
        if (storedData) {
          setData(JSON.parse(storedData));
        }
      } catch (error) {
        console.error("Failed to parse analysis data:", error);
      } finally {
        setLoading(false);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center font-sans">
        <div className="flex flex-col items-center">
          <div className="relative w-16 h-16 flex items-center justify-center mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-gray-800"></div>
            <div className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
            <div className="w-6 h-6 rounded-full bg-indigo-500/20 animate-pulse"></div>
          </div>
          <p className="text-indigo-400 font-medium tracking-wide animate-pulse">Initializing Dashboard...</p>
        </div>
      </div>
    );
  }

  if (!data || !data.success) {
    return (
      <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center text-white font-sans p-6">
        <div className="bg-[#1F2937] p-8 md:p-10 rounded-2xl border border-red-500/20 text-center max-w-lg w-full shadow-2xl shadow-red-500/10">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">⚠️</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-wide">No Analysis Data</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            We couldn't find any recent analysis results. Please scan a repository first to generate insights.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-indigo-500/30 transition-all active:scale-95"
          >
            Start New Scan
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#0B0F19] text-white overflow-hidden font-sans selection:bg-indigo-500/30">
      <Sidebar />
      
      <div className="flex-1 flex flex-col h-full relative">
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
          <div className="max-w-6xl mx-auto">
            
            {/* Top Indicator & Stats Row */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full w-fit">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Analysis Complete</span>
              </div>
              
              <div className="bg-[#111827] border border-gray-800 px-5 py-2.5 rounded-xl flex items-center justify-between sm:justify-start shadow-sm w-full sm:w-auto">
                <span className="text-gray-400 mr-4 text-sm font-medium">Total Files Analyzed</span>
                <span className="bg-gradient-to-br from-indigo-400 to-purple-400 bg-clip-text text-transparent font-black text-xl">
                  {data.totalFiles.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Content Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Left Column (Main Content) */}
              <div className="lg:col-span-2 space-y-6 md:space-y-8">
                <SummaryCard 
                  summary={data.summary.summary} 
                  description={data.summary.description} 
                />
                
                {/* Mobile/Tablet Tech Stack (hidden on LG screens) */}
                <div className="block lg:hidden">
                  <TechStack techStack={data.summary.techStack} />
                </div>
                
                <FileList files={data.files} />
              </div>
              
              {/* Right Column (Side Panels) */}
              <div className="hidden lg:flex flex-col space-y-8">
                <TechStack techStack={data.summary.techStack} />
                
                {/* Action Card matching theme */}
                <div className="bg-gradient-to-br from-[#1F2937] to-[#111827] rounded-xl p-6 border border-gray-800 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:bg-indigo-500/20"></div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-wide">Ready for Action</h3>
                  <p className="text-gray-400 text-sm mb-6 relative z-10 leading-relaxed">
                    Use these AI insights to optimize your architecture and clear technical debt seamlessly.
                  </p>
                  <button className="w-full bg-[#111827] hover:bg-gray-800 border border-gray-700 text-white rounded-lg py-3 transition-colors text-sm font-semibold shadow-inner active:scale-95">
                    Export Report PDF
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
