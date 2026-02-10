import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const contacts = [
  {
    title: "Email",
    description: "vadlamanisaketh25@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=vadlamanisaketh25@gmail.com&su=Contact%20from%20Portfolio&body=Hi,There Let's Connect!",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    title: "GitHub",
    description: "Follow for code updates",
    href: "https://github.com/NagaaSaketh",
    icon: <Github className="h-5 w-5" />,
  },
  {
    title: "LinkedIn",
    description: "Connect for opportunities",
    href: "https://www.linkedin.com/in/nagasaketh-vadlamani/",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    title: "Twitter / X",
    description: "Follow for quick insights",
    href: "https://x.com/SakethNaag51440",
    icon: <Twitter className="h-5 w-5" />,
  },
];

const Connect = () => {
  return (
    <section className="section-anchor py-16 sm:py-20" id="connect">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <p className="fade-up text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
            Connect
          </p>
          <h2 className="fade-up delay-1 font-display text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s collaborate to build something valuable.
          </h2>
          <p className="fade-up delay-2 max-w-3xl text-base text-slate-300 sm:text-lg">
            Open to full-stack opportunities, project collaborations, and product
            conversations.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {contacts.map((contact, index) => (
            <a
              key={contact.title}
              href={contact.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Card
                className="fade-up group h-full border-slate-800/90 bg-slate-950/70 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40"
                style={{ animationDelay: `${120 + index * 120}ms` }}
              >
                <CardHeader className="space-y-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-emerald-200 transition-all duration-300 group-hover:border-emerald-300 group-hover:text-emerald-100">
                    {contact.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{contact.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {contact.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="inline-flex items-center gap-2 text-sm text-emerald-300 transition-all duration-300 group-hover:gap-3">
                    Open link
                    <ArrowRight className="h-4 w-4" />
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <Card className="fade-up delay-3 border-emerald-400/25 bg-emerald-400/8">
          <CardContent className="flex flex-wrap items-center justify-between gap-4 pt-6">
            <p className="max-w-2xl text-sm text-emerald-100 sm:text-base">
              Prefer a direct intro? Send a short project brief and expected timeline,
              and I&apos;ll respond with a practical plan.
            </p>
            <a
              className={cn(buttonVariants({ variant: "secondary" }), "w-full sm:w-auto")}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vadlamanisaketh25@gmail.com&su=Contact%20from%20Portfolio&body=Hi,There Let's Connect!"
              rel="noopener noreferrer"
              target="_blank"
            >
              Start Conversation
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Connect;
