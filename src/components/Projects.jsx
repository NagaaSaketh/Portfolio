import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import kaviospixCover from "../assets/kaviospix.png";
import aicover from "../assets/ai_cover.png"

const projects = [
  {
    title: "Fashion Forte",
    description:
      "A modern e-commerce platform to browse and shop the latest fashion for Men, Women, and Kids.",
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
    demoLink: "https://fashionforte.vercel.app/",
    codeLink: "https://github.com/NagaaSaketh/ProjectMajor_Frontend",
    stack: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Anvaya CRM",
    description:
      "Anvaya CRM helps track leads, assign sales agents, and manage updates throughout the lead lifecycle.",
    image:
      "https://www.subraa.com/there/wp-content/uploads/logo-design-singapore-portfolio/CRM-Software-Company-Logo-Design.jpg",
    demoLink: "https://crm-anvaya.vercel.app/",
    codeLink: "https://github.com/NagaaSaketh/MajorProject2_Frontend",
    stack: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
  },
  {
    title: "DevConnect",
    description:
      "DevConnect is a platform where developers connect, collaborate, and code together.",
    image:
      "https://appinventiv.com/wp-content/uploads/2024/12/how_to_hire_a_cross_platform_developer_all_you_need_to_know.webp",
    demoLink: "https://dev-connect-collab.vercel.app/login",
    codeLink: "https://github.com/NagaaSaketh/DevConnect_Frontend",
    stack: ["React", "Node.js", "MongoDB", "Express", "Cloudinary", "OAuth"],
  },
  {
    title: "KaviosPix",
    description:
      "KaviosPix is a MERN-based image management platform that uses Cloudinary for efficient image storage, with features like album organization, tagging, and secure sharing via Google OAuth.",
    image: kaviospixCover,
    demoLink: "https://kaviospix-one.vercel.app/",
    codeLink: "https://github.com/NagaaSaketh/KaviosPix_FE",
    stack: ["React", "Node.js", "MongoDB", "Express", "Cloudinary", "OAuth"],
  },
  {
    title: "AI Product Rendering System",
    description:
      "Built a generative AI pipeline using ComfyUI and custom-trained Flux LoRA to generate photorealistic product renders across multiple environments with consistent identity, lighting, and reflections.",
    image: aicover,
    demoLink: "https://www.loom.com/share/8cc8862a55174f9d939c0bdf1c70115b",
    codeLink: "https://github.com/NagaaSaketh/Ai_Product_Rendering_System",
    stack: [
      "ComfyUI",
      "Flux LoRA",
      "SDXL",
      "Prompt Engineering",
    ],
  },
];

const Projects = () => {
  return (
    <section className="section-anchor py-16 sm:py-20" id="projects">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <p className="fade-up text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
            Projects
          </p>
          <h2 className="fade-up delay-1 font-display text-3xl font-bold text-white sm:text-4xl">
            Turning creativity into real-world solutions.
          </h2>
          <p className="fade-up delay-2 max-w-3xl text-base text-slate-300 sm:text-lg">
            End-to-end builds that combine polished interfaces, reliable APIs,
            and practical product flows.
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="fade-up group flex h-full flex-col overflow-hidden border-slate-800/90 bg-slate-950/70 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_10px_40px_-18px_rgba(16,185,129,0.45)]"
              style={{ animationDelay: `${120 + index * 140}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              </div>

              <CardHeader className="space-y-2">
                <CardTitle className="text-xl text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-slate-300">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-2">
                <a
                  className={cn(
                    buttonVariants({ size: "sm", variant: "outline" }),
                    "w-full",
                  )}
                  href={project.demoLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ExternalLink />
                  Demo
                </a>
                <a
                  className={cn(
                    buttonVariants({ size: "sm", variant: "secondary" }),
                    "w-full",
                  )}
                  href={project.codeLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github />
                  Code
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
