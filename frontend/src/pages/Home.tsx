import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { BeamsBackground } from "../components/ui/beams-background";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <BeamsBackground className="bg-dark-bg text-white font-sans" intensity="medium">
      
      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col flex-1">
        <header className="sticky top-0 z-50 w-full border-b border-dark-border/40 bg-dark-bg/80 backdrop-blur-xl">
          <Navbar />
        </header>
        
        <main className="flex-1 flex flex-col items-center w-full">
          {/* Main Hero that takes full width and manages its own max bounds */}
          <div className="w-full pb-20 border-b border-dark-border/40">
            <Hero />
          </div>

          {/* Feature highlights */}
          <div className="w-full bg-[#0a0d16]">
            <Features />
          </div>
          
          {/* Bottom call to action */}
          <div className="w-full bg-dark-bg">
            <CTA />
          </div>
        </main>
        
        <Footer />
      </div>
    </BeamsBackground>
  );
}
