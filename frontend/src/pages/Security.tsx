import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Banner } from "../components/ui/banner";
import { useEffect, useState } from "react";

export default function Security() {
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
          id="security-coming-soon"
          variant="rainbow"
          className="border-b border-indigo-500/20"
          rainbowColors={[
            "rgba(239,68,68,0.77)", // red
            "rgba(249,115,22,0.77)", // orange
            "transparent",
            "rgba(239,68,68,0.77)",
            "transparent",
          ]}
        >
           🔒 Vulnerability Detection Engine is evolving! Zero-day scans coming soon.
        </Banner>
        <Header repoUrl={repoUrl} />
        
        <main className="flex-1 overflow-y-auto p-6 md:p-8 flex items-center justify-center">
          <div className="text-center text-gray-400 max-w-md bg-[#1F2937] p-10 rounded-2xl border border-gray-800 shadow-xl">
            <span className="text-6xl block mb-6">🛡️</span>
            <h2 className="text-2xl font-bold text-white mb-2">Security Audit</h2>
            <p className="leading-relaxed">We're integrating advanced CVE tracking and zero-day vulnerability scanning for your repositories.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
