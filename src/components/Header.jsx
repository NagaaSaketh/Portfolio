import { Sparkles } from "lucide-react";
import devLogo from "@/assets/dev.png";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Tech" },
  { href: "#connect", label: "Connect" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#about"
          className="fade-up flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-2"
        >
          <img
            className="h-10 w-10 rounded-full border border-slate-700 object-cover"
            src={devLogo}
            alt="Naga Saketh logo"
          />
          <div>
            <p className="font-display text-base font-semibold text-slate-100 sm:text-lg">
              Naga Saketh
            </p>
            <p className="flex items-center gap-1 text-xs text-emerald-300 sm:text-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Full Stack Developer
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              <Button className="fade-up delay-1" size="sm" variant="ghost">
                {item.label}
              </Button>
            </a>
          ))}
        </nav>

        <div className="fade-up delay-2 flex items-center gap-2">
          <a
            href="https://drive.google.com/file/d/1ZODHRbUJ5Ea1tX1xdhUhipCf83ARttYm/preview"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="hidden sm:inline-flex" size="sm" variant="outline">
              Resume
            </Button>
          </a>
          <a href="#connect">
            <Button size="sm">Let&apos;s Talk</Button>
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-3 sm:px-6 md:hidden">
        <div className="fade-up delay-3 flex items-center gap-2 overflow-x-auto rounded-full border border-slate-800 bg-slate-900/40 p-1">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              <Button className="min-w-fit" size="sm" variant="ghost">
                {item.label}
              </Button>
            </a>
          ))}
        </div>
      </div>
      <Separator className="bg-slate-800/60" />
    </header>
  );
};

export default Header;
