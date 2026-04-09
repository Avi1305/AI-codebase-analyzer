

const features = [
  {
    title: "Architecture Insights",
    description:
      "Map patterns, data flows, and structural relationships between modules and services automatically.",
    tags: ["#DependencyGraph", "#FlowMapping"],
    icon: (
      <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Tech Stack Detection",
    description:
      "Auto-identify libraries, versions, build configurations, and potential legacy technical debt.",
    tags: ["Vue.js", "React", "PostgreSQL"],
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Chat with Codebase",
    description:
      "Query your codebase like a senior dev peer-reviewer. Ask complex questions about implementation logic.",
    tags: ['"Where is the auth logic located?"'],
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Supercharge your code intelligence
          </h2>
          <p className="text-dark-muted text-lg">
            Stop digging through READMEs. Get the full picture of any project in a fraction of the time.
          </p>
        </div>
        <a href="#capabilities" className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1 transition-colors whitespace-nowrap">
          View all capabilities &rarr;
        </a>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col h-full p-6 md:p-8 rounded-2xl bg-dark-card border border-dark-border hover:border-dark-border/80 transition-colors"
          >
            {/* Icon */}
            <div className="w-10 h-10 rounded-lg bg-dark-surface flex items-center justify-center mb-6">
              {item.icon}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-dark-muted leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>

            {/* Tags / Chips */}
            <div className="mt-8 flex flex-wrap gap-2">
              {item.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 text-xs font-medium bg-dark-surface text-dark-muted rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
