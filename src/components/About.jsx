import { ArrowRight, BriefcaseBusiness, FileText, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const highlights = [
  "React",
  "Node.js",
  "MongoDB",
  "REST APIs",
  "Cloudinary",
  "ComfyUI",
  "Flux LoRA Training",
  "Prompt Engineering",
  ,
];

const About = () => {
  return (
    <section className="section-anchor py-16 sm:py-20" id="about">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:px-8">
        <div className="space-y-6">
          <Badge className="fade-up" variant="outline">
            Portfolio 2026 Edition
          </Badge>

          <div className="space-y-4">
            <h1 className="fade-up delay-1 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building full-stack applications and AI-powered workflows.
            </h1>
            <p className="fade-up delay-2 max-w-2xl text-base text-slate-300 sm:text-lg">
              Full-stack developer building scalable web applications and
              AI-powered workflows. Hands-on experience with ComfyUI and Flux
              LoRA for realistic product rendering. Currently learning RAG, tool
              calling, and AI agent systems.
            </p>
            <p className="fade-up delay-3 max-w-2xl text-base text-slate-400 sm:text-lg">
              I specialize in React, Node.js, and MongoDB, while also working
              with ComfyUI, LoRA models, and RAG pipelines to build practical
              AI-driven products.
            </p>
          </div>

          <div className="fade-up delay-4 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>

          <div className="fade-up delay-4 flex flex-wrap gap-3">
            <a
              className={cn(buttonVariants({ size: "lg" }), "pulse-glow")}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vadlamanisaketh25@gmail.com&su=Contact%20from%20Portfolio&body=Hi,There Let's Connect!"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Mail />
              Contact Me
              <ArrowRight />
            </a>
            <a
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              href="https://drive.google.com/file/d/1ZODHRbUJ5Ea1tX1xdhUhipCf83ARttYm/preview"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FileText />
              Resume
            </a>
          </div>
        </div>

        <Card className="fade-up delay-2 glow-ring relative overflow-hidden">
          <div className="bg-orb absolute -right-16 -top-16 h-36 w-36 rounded-full bg-emerald-400/15" />
          <CardHeader className="space-y-2">
            <CardTitle className="text-3xl text-white">Naga Saketh</CardTitle>
            <CardDescription className="text-emerald-200">
              Full Stack Developer | Generative AI Enthusiast
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <BriefcaseBusiness className="h-5 w-5 text-emerald-300" />
              <div>
                <p className="font-semibold text-slate-200">
                  Project-first approach
                </p>
                <p className="text-sm text-slate-400">
                  Focused on building production-style applications end-to-end.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                Core Strengths
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Full-stack development, API integration, authentication systems,
                and building generative AI workflows using ComfyUI and custom
                LoRA models.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
