export default function CTA() {
  return (
    <section className="px-6 py-12 md:py-24 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden px-6 py-16 text-center shadow-2xl">
        {/* Dynamic Gradient Background matching the image */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 opacity-90" />
        {/* Decorative glass overlay */}
        <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Ready to audit your first repo?
          </h2>
          <p className="text-indigo-100 max-w-xl mx-auto text-lg mb-10">
            Join 5,000+ developers making technical onboarding and maintenance 10x faster.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <button className="w-full sm:w-auto px-8 py-3 rounded-lg bg-white text-indigo-600 font-bold hover:bg-slate-50 transition-colors shadow-lg">
              Get Started Free
            </button>
            <button className="w-full sm:w-auto px-8 py-3 rounded-lg bg-transparent border border-white/30 text-white font-bold hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
