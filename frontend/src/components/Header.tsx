import React from 'react';

const getRepoName = (url?: string) => {
  if (!url) return "Unknown Repo";
  const parts = url.split("/");
  return parts[parts.length - 1];
};

interface HeaderProps {
  repoUrl?: string;
}

const Header: React.FC<HeaderProps> = ({ repoUrl }) => {
  return (
    <header className="px-6 py-8 md:px-8 border-b border-gray-800 bg-[#0B0F19]/90 backdrop-blur-md sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-white tracking-tight">Analysis Dashboard</h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base font-medium">Deep insights into your repository</p>
        </div>

        {repoUrl && (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-[#111827] px-4 py-2 rounded-xl border border-gray-800 shadow-inner">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                📦
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-white">
                  {getRepoName(repoUrl)}
                </span>
                <span className="text-xs text-gray-400">main branch</span>
              </div>
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-gray-400 hover:text-indigo-400 transition"
              >
                🔗
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
