import { useState } from "react";

export default function RepoInput() {
  const [repoUrl, setRepoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    if (!repoUrl.trim()) return;
    setLoading(true);
    // Mock API call
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem("analyzedRepo", repoUrl);
      window.location.href = "/dashboard";
    }, 1500);
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
