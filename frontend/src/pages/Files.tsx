import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Banner } from "../components/ui/banner";
import { useEffect, useState } from "react";

export default function Files() {
  const [repoUrl, setRepoUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const currentRepoStr = localStorage.getItem("currentRepo");
    const currentRepo = currentRepoStr ? JSON.parse(currentRepoStr) : null;
    const analysisDataStr = localStorage.getItem("analysis");
    const analysisData = analysisDataStr ? JSON.parse(analysisDataStr) : null;
    setRepoUrl(currentRepo?.url || analysisData?.repoUrl);
  }, []);

  return (
    <div className="flex h-screen bg-[#0B0F19] text-white overflow-hidden font-sans selection:bg-indigo-500/30">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full relative">
        <Banner
          id="files-coming-soon"
          variant="rainbow"
          className="border-b border-indigo-500/20"
          rainbowColors={[
            "rgba(99,102,241,0.77)",
            "rgba(59,130,246,0.77)",
            "transparent",
            "rgba(168,85,247,0.77)",
            "transparent",
          ]}
        >
          🚀 Advanced File Explorer is evolving! Deep architectural mapping coming soon.
        </Banner>
        <Header repoUrl={repoUrl} />
        
        <main className="flex-1 overflow-y-auto p-6 md:p-8 flex items-center justify-center">
          <div className="text-center text-gray-400 max-w-md bg-[#1F2937] p-10 rounded-2xl border border-gray-800 shadow-xl">
            <span className="text-6xl block mb-6">📁</span>
            <h2 className="text-2xl font-bold text-white mb-2">Files View</h2>
            <p className="leading-relaxed">We're actively building an advanced codebase tree explorer for real-time architectural parsing.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
