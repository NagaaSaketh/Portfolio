import { ArrowUpRight, CircleArrowUp } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="pb-10 pt-8 sm:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Separator className="mb-6" />
        <div className="fade-up flex flex-wrap items-center justify-between gap-4 text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Naga Saketh. All rights reserved.</p>
          <a
            className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200"
            href="https://neog.camp"
            rel="noopener noreferrer"
            target="_blank"
          >
            Learning full stack at neog.camp
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <button
        aria-label="Back to top"
        className={cn(
          buttonVariants({ size: "icon" }),
          "pulse-glow fixed bottom-5 right-5 z-50 rounded-full shadow-lg"
        )}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        type="button"
      >
        <CircleArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
