import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Overview', active: true },
    { name: 'Files', active: false },
    { name: 'Security', active: false },
    { name: 'Dependencies', active: false },
    { name: 'Chat', active: false },
  ];

  return (
    <aside className="w-64 bg-[#111827] border-r border-gray-800 flex-col hidden md:flex h-full select-none">
      <div className="p-6 shrink-0">
        <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 shrink-0">
          Codebase AI
        </h1>
      </div>
      
      <nav className="flex-1 px-4 py-2 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 text-left font-medium ${
              item.active
                ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30 shadow-inner'
                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800 border border-transparent'
            }`}
          >
            {item.name}
          </button>
        ))}
      </nav>
      
      <div className="p-6 shrink-0 border-t border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-purple-500/20">
            AI
          </div>
          <div className="text-sm font-medium text-gray-300">Analyzer Active</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
