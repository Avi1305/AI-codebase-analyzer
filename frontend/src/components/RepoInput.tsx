import { useState } from "react";
import axios from "axios";
const API = import.meta.env.VITE_API_URL;
const getRepoName = (url: string) => {
  if (!url) return "Unknown Repo";
  const parts = url.split("/");
  return parts[parts.length - 1];
};

const saveRepo = (repoData: any) => {
  const existing = JSON.parse(localStorage.getItem("repos") || "[]");

  const newRepo = {
    id: Date.now().toString(),
    name: getRepoName(repoData.repoUrl),
    url: repoData.repoUrl,
    analyzedAt: new Date().toISOString(),
    techStack: repoData.summary?.techStack || [],
    totalFiles: repoData.totalFiles,
  };

  const updated = [newRepo, ...existing];

  localStorage.setItem("repos", JSON.stringify(updated));
};

export default function RepoInput() {
  const [repoUrl, setRepoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!repoUrl.trim()) return;
    setLoading(true);
    
    try {
      const response = await axios.post(`${API}/api/analyze`, {
        repoUrl,
      });

      const analysisData = { ...(response.data as any), repoUrl };
      localStorage.setItem("analysis", JSON.stringify(analysisData));
      saveRepo(analysisData);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
      alert("Error analyzing repository. Please check the backend connection and try again.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
      <div className="w-full flex items-center p-1.5 bg-dark-card border border-dark-border rounded-xl focus-within:border-indigo-500/50 transition-colors shadow-lg">
        {/* Left Icon */}
        <div className="pl-4 pr-2 text-dark-muted/60 font-mono font-medium">
          &lt;/&gt;
        </div>
        
        {/* Input */}
        <input
          type="text"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
          placeholder="https://github.com/user/repo"
          className="flex-1 bg-transparent border-none outline-none text-white placeholder-dark-muted/50 text-[15px] px-2 py-3"
          disabled={loading}
        />
        
        {/* Analyze button */}
        <button
          onClick={handleAnalyze}
          disabled={loading || !repoUrl}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <span>{loading ? "Analyzing..." : "Analyze"}</span>
          {!loading && <span className="text-lg leading-none">&rarr;</span>}
        </button>
      </div>
      
      {/* Microcopy */}
      <p className="text-xs text-dark-muted/70 mt-4 tracking-wide">
        No signup required • Works instantly
      </p>
    </div>
  );
}
