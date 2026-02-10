import About from "@/components/About";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-orb absolute -left-20 top-32 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="bg-orb absolute right-0 top-96 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl [animation-delay:900ms]" />
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <About />
          <Projects />
          <TechStack />
          <Connect />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
