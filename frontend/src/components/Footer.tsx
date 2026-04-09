export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-bg px-6 py-12 text-sm text-dark-muted">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="text-lg font-bold">
            <span className="text-white">Codebase </span>
            <span className="text-white">AI</span>
          </div>
          <p>&copy; 2024 Codebase AI. Built for developers.</p>
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>

        {/* Locale/Region */}
        <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>English (US)</span>
        </div>

      </div>
    </footer>
  );
}
