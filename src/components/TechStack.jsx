import { Brain, Code2, Database, PenTool, ServerCog } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stackGroups = [
  {
    title: "Frontend",
    icon: <Code2 className="h-5 w-5 text-emerald-300" />,
    tools: [
      "React",
      "JavaScript",
      "HTML",
      "Bootstrap",
      "Tailwind CSS",
      "ShadCN UI",
      "DaisyUI",
    ],
  },
  {
    title: "Backend",
    icon: <ServerCog className="h-5 w-5 text-sky-300" />,
    tools: [
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "JWT Auth",
      "OAuth",
      "Cloudinary",
    ],
  },
  {
    title: "Generative AI",
    icon: <Brain className="h-5 w-5 text-sky-500" />,
    tools: [
      "ComfyUI",
      "Flux LoRA",
      "SDXL",
      "Prompt Engineering",
      "RAG ( Learning )",
      "LLM Tool Calling ( Learning )",
    ],
  },
  {
    title: "Tools & Platform",
    icon: <Database className="h-5 w-5 text-violet-300" />,
    tools: [
      "GitHub",
      "Vercel",
      "Render",
      "VS Code",
      "Postman",
      "MongoDB Atlas",
    ],
  },
];

const TechStack = () => {
  return (
    <section className="section-anchor py-16 sm:py-20" id="stack">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <p className="fade-up text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
            Tech Stack
          </p>
          <h2 className="fade-up delay-1 font-display text-3xl font-bold text-white sm:text-4xl">
            Technologies and tools I build with.
          </h2>
          <p className="fade-up delay-2 max-w-3xl text-base text-slate-300 sm:text-lg">
            A practical stack focused on shipping products quickly without
            sacrificing maintainability.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {stackGroups.map((group, index) => (
            <Card
              key={group.title}
              className="fade-up border-slate-800/90 bg-slate-950/70"
              style={{ animationDelay: `${120 + index * 140}ms` }}
            >
              <CardHeader className="space-y-3">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-sm text-slate-300">
                  {group.icon}
                  {group.title}
                </div>
                <CardTitle className="text-xl text-white">
                  {group.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <Badge key={tool} variant="secondary">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="fade-up delay-3 border-slate-800/90 bg-slate-900/60">
          <CardContent className="flex flex-wrap items-center justify-between gap-3 pt-6">
            <p className="text-sm text-slate-300 sm:text-base">
              I keep designs implementation-friendly by aligning UI, APIs, and
              deployment constraints early in each project.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
              <PenTool className="h-4 w-4" />
              Product-minded engineering
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TechStack;
