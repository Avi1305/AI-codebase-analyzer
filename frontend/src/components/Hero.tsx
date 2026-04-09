import RepoInput from "./RepoInput";

export default function Hero() {
  return (
    <div className="w-full relative flex flex-col items-center flex-1 z-10 pt-20 px-6">
      {/* Glow Behind Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Badge */}
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-dark-border bg-dark-card text-xs font-medium text-dark-muted/80 mb-8 backdrop-blur-sm shadow-sm">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>Now supporting private enterprise repositories</span>
      </div>

      {/* Headlines */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-white text-center leading-[1.1] tracking-tight max-w-4xl mb-6">
        Understand Any Codebase<br />
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">in Seconds</span>
      </h1>
      
      <p className="text-lg md:text-xl text-dark-muted max-w-2xl text-center mb-10 leading-relaxed">
        Paste a GitHub repository and let AI break down architecture, tech
        stack, and logic instantly.
      </p>

      {/* Repo Input */}
      <div className="w-full z-20">
        <RepoInput />
      </div>

      {/* Code Snapshot Presentation graphic block */}
      <div className="mt-16 sm:mt-24 w-full max-w-5xl mx-auto relative hidden md:block">
        {/* Glow behind image block */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-600/20 blur-[120px] rounded-full" />
        
        <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-dark-card transform transition-transform">
          {/* Glass Overlay Popup */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-80 shadow-2xl rounded-[20px] bg-dark-surface/80 backdrop-blur-xl border border-white/10 p-5">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-indigo-400 text-xl">✨</span>
              </div>
              <div className="flex-1">
                <p className="text-white font-bold text-[15px] leading-tight">AI Insights Ready</p>
                <p className="text-dark-muted/80 text-[13px] mt-0.5">Architecture analysis complete</p>
              </div>
            </div>
            <div className="w-full bg-black/40 rounded-full h-1.5 mb-3 overflow-hidden border border-white/5">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1.5 rounded-full w-[100%]"></div>
            </div>
            <div className="w-full flex justify-between text-[11px] text-dark-muted font-medium uppercase tracking-wider">
              <span>System Mapping</span>
              <span>100%</span>
            </div>
          </div>

          {/* Fake Code Editor Background matching the image provided format */}
          <div className="h-[500px] w-full bg-[#0E1320] relative">
            <div className="absolute inset-x-0 top-0 h-10 flex items-center px-4 border-b border-white/5 bg-[#141B2A]">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-slate-600/50"></div>
                 <div className="w-3 h-3 rounded-full bg-slate-600/50"></div>
                 <div className="w-3 h-3 rounded-full bg-slate-600/50"></div>
               </div>
            </div>
            <div className="pt-14 px-8 pb-8 h-full overflow-hidden opacity-40">
              <pre className="font-mono text-sm leading-relaxed text-indigo-200/60">
                 <br/>
                 import React, {"{"} useState, useEffect {"}"} from 'react';<br/>
                 import {"{"} parseRepo {"}"} from '@codebase/analyzer';<br/><br/>
                 export default function ArchitectureGraph(props) {"{"}<br/>
                 {"  "}const [nodes, setNodes] = useState([]);<br/>
                 {"  "}const [edges, setEdges] = useState([]);<br/><br/>
                 {"  "}useEffect(() =&gt; {"{"}<br/>
                 {"    "}async function load() {"{"}<br/>
                 {"      "}const data = await parseRepo(props.url);<br/>
                 {"      "}setNodes(data.architecture.nodes);<br/>
                 {"      "}setEdges(data.architecture.relationships);<br/>
                 {"    "}{"}"}<br/>
                 {"    "}load();<br/>
                 {"  "}{"}"}, [props.url]);<br/><br/>
                 {"  "}return (<br/>
                 {"    "}&lt;GraphCanvas nodes={"{"}nodes{"}"} edges={"{"}edges{"}"} /&gt;<br/>
                 {"  "});<br/>
                 {"}"}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
