export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
      {/* Brand */}
      <div className="flex items-center gap-1.5 font-bold text-xl tracking-tight">
        <span className="text-indigo-400">Codebase</span>
        <span className="text-white">AI</span>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
        <li><a href="#" className="text-white hover:text-indigo-300 transition-colors">Dashboard</a></li>
        <li><a href="#" className="text-dark-muted hover:text-white transition-colors">Repositories</a></li>
        <li><a href="#" className="text-dark-muted hover:text-white transition-colors">Insights</a></li>
        <li><a href="#" className="text-dark-muted hover:text-white transition-colors">Docs</a></li>
        <li><a href="#" className="text-dark-muted hover:text-white transition-colors">GitHub</a></li>
      </ul>

      {/* Right Controls */}
      <div className="flex items-center gap-5">
        <button className="text-dark-muted hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
}
