import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function Repositories() {
  const [repos, setRepos] = useState<any[]>([]);
  const [currentRepo, setCurrentRepo] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("repos") || "[]");
    data.sort((a: any, b: any) => new Date(b.analyzedAt).getTime() - new Date(a.analyzedAt).getTime());
    setRepos(data);

    const storedCurrent = JSON.parse(localStorage.getItem("currentRepo") || "null");
    setCurrentRepo(storedCurrent);
  }, []);

  const handleOpen = (repo: any) => {
    setCurrentRepo(repo);
    localStorage.setItem("currentRepo", JSON.stringify(repo));
    navigate("/dashboard");
  };

  const handleReanalyze = (e: React.MouseEvent, repo: any) => {
    e.stopPropagation();
    localStorage.setItem("analyzeRepoUrl", repo.url);
    navigate(`/?repoUrl=${encodeURIComponent(repo.url)}`);
  };

  return (
    <div className="flex h-screen bg-[#0B0F19] text-white overflow-hidden font-sans selection:bg-indigo-500/30">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full relative">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 tracking-tight text-white">Repositories</h2>
            
            {repos.length === 0 ? (
              <div className="bg-[#1F2937] p-10 rounded-2xl border border-gray-800 text-center max-w-lg mx-auto mt-20 shadow-xl">
                <div className="w-16 h-16 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="text-xl font-bold mb-2">No repositories analyzed yet</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">Analyze your first GitHub repository to see insights and metrics here.</p>
                <button 
                  onClick={() => navigate('/')}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold transition shadow-lg shadow-indigo-500/20 active:scale-95"
                >
                  Analyze your first repo
                </button>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {repos.map((repo) => {
                  const isCurrent = currentRepo?.id === repo.id;
                  
                  return (
                    <div 
                      key={repo.id} 
                      onClick={() => handleOpen(repo)}
                      className={`bg-[#1F2937] rounded-2xl p-5 border ${
                        isCurrent 
                          ? "border-indigo-500 shadow-indigo-500/20" 
                          : "border-gray-800 shadow-black/20"
                      } hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 cursor-pointer transition flex flex-col shadow-lg`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex flex-col overflow-hidden mr-3">
                          <h3 className="text-white font-semibold text-lg truncate tracking-wide" title={repo.name}>{repo.name}</h3>
                          <p className="text-xs text-gray-500 truncate mt-1" title={repo.url}>{repo.url}</p>
                        </div>
                        <span className="text-xs text-gray-400 bg-[#0B0F19] px-2 py-1 rounded-md border border-gray-800 shrink-0">
                          {new Date(repo.analyzedAt).toLocaleDateString()}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6 h-12 overflow-hidden">
                        {repo.techStack && repo.techStack.slice(0, 3).map((tech: string, i: number) => (
                          <span key={i} className="text-xs px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded-md whitespace-nowrap">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center mt-auto border-t border-gray-800 pt-4">
                        <span className="text-sm font-medium text-gray-400 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          {repo.totalFiles} files
                        </span>

                        <div className="flex items-center gap-4">
                          <button 
                            onClick={(e) => handleReanalyze(e, repo)} 
                            className="text-sm font-medium text-gray-400 hover:text-white transition relative z-10"
                          >
                            Re-analyze
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); handleOpen(repo); }} 
                            className="text-sm font-bold text-indigo-400 hover:text-indigo-300 transition relative z-10"
                          >
                            Open &rarr;
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            
          </div>
        </main>
      </div>
    </div>
  );
}
