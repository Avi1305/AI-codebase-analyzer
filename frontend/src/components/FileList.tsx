import React from 'react';

interface FileData {
  filePath: string;
  content: string;
}

interface FileListProps {
  files: FileData[];
}

const FileList = ({ files }: FileListProps) => {
  // Filter for important component/source files
  const importantFiles = files.filter(file => {
    const defaultPath = file.filePath.toLowerCase();
    return defaultPath.includes("src") &&
           (defaultPath.endsWith(".js") ||
            defaultPath.endsWith(".ts") ||
            defaultPath.endsWith(".jsx") ||
            defaultPath.endsWith(".tsx"));
  }).slice(0, 5);

  const getBadgeConfig = (filePath: string) => {
    const lowerPath = filePath.toLowerCase();
    if (lowerPath.includes("index") || lowerPath.includes("main") || lowerPath.includes("app")) {
      return { label: "ENTRY", classes: "bg-purple-500/20 text-purple-400 border-purple-500/30" };
    }
    if (lowerPath.includes("service") || lowerPath.includes("controller") || lowerPath.includes("route")) {
      return { label: "CORE", classes: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" };
    }
    return { label: "FILE", classes: "bg-gray-800 text-gray-400 border-gray-600" };
  };

  return (
    <div className="bg-[#1F2937] rounded-xl p-6 md:p-8 shadow-xl shadow-black/20 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mr-4 border border-emerald-500/30">
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white tracking-wide">Key Source Files</h3>
        </div>
        <span className="text-xs font-semibold text-gray-400 bg-[#111827] px-3 py-1 rounded-full border border-gray-700">
          Showing Top {importantFiles.length}
        </span>
      </div>

      <div className="space-y-4">
        {importantFiles.map((file, index) => {
          // Robust file path splitting for both Windows and Posix
          const fileName = file.filePath.split(/[/\\]/).pop() || '';
          const badge = getBadgeConfig(file.filePath);
          
          return (
            <div 
              key={index} 
              className="bg-[#111827] rounded-xl p-5 border border-gray-800 hover:border-gray-700 hover:shadow-lg transition-all group"
            >
              <div className="flex justify-between items-start mb-3 gap-4">
                <span className="font-mono text-sm font-semibold text-indigo-300 break-all bg-indigo-500/10 px-2 py-0.5 rounded">
                  {fileName}
                </span>
                <span className={`text-[10px] tracking-wider px-2.5 py-1 rounded-md font-bold border ${badge.classes} shrink-0`}>
                  {badge.label}
                </span>
              </div>
              <p className="text-gray-500 text-xs md:text-sm font-mono leading-relaxed truncate opacity-80 group-hover:opacity-100 transition-opacity">
                {file.content.substring(0, 100).replace(/\n/g, ' ')}...
              </p>
            </div>
          );
        })}

        {importantFiles.length === 0 && (
          <div className="bg-[#111827] border border-dashed border-gray-700 rounded-xl p-8 text-center">
            <p className="text-gray-500">No key source files found in the src directory.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileList;
