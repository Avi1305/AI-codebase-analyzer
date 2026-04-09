import React from 'react';

const Header = () => {
  return (
    <header className="px-6 py-8 md:px-8 border-b border-gray-800 bg-[#0B0F19]/90 backdrop-blur-md sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex flex-col">
        <h2 className="text-3xl font-bold text-white tracking-tight">Analysis Dashboard</h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base font-medium">Deep insights into your repository</p>
      </div>
    </header>
  );
};

export default Header;
