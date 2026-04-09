import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { PageShell } from "@/components/page-shell";
import { starterProjects } from "@/components/site-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SignupCard } from "@/components/signup-card";

export default function HomePage() {
  return (
    <PageShell>
      <div className="space-y-14">
        <Hero />

        <section className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Start with useful projects",
              text: "Beginner builds should teach one or two repeatable skills while creating something you will actually use."
            },
            {
              title: "Buy tools in the right order",
              text: "Layout, cutting, drilling, clamping, and surface prep create the biggest capability jump per dollar."
            },
            {
              title: "Build the shop that builds your work",
              text: "A better work surface, safer setup, and simple workflow improvements matter more than chasing the perfect shop."
            }
          ].map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-charcoal">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ember">Featured Projects</p>
            <h2 className="text-3xl font-semibold tracking-tight text-walnut md:text-4xl">Start with simple wins that compound</h2>
            <p className="text-base leading-7 text-charcoal md:text-lg">
              These projects are lightweight on complexity but strong on skill-building. Each one teaches core basics and points naturally to the next build.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {starterProjects.map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <div className="h-32 bg-timber-warm" />
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="outline">{project.category}</Badge>
                    <span className="text-sm text-steel">{project.time}</span>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.difficulty}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-7 text-charcoal">{project.summary}</p>
                  <Link href="/projects">
                    <Button variant="ghost" className="px-0">
                      View project path <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid items-stretch gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card className="bg-walnut text-white">
            <CardHeader>
              <CardTitle className="text-3xl text-white">No fluff. Just build.</CardTitle>
              <CardDescription className="text-white/70">A practical philosophy for beginners who want real progress.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-5 text-white/90 sm:grid-cols-2">
              {[
                "Keep steps concise and actionable",
                "Use beginner-friendly material choices",
                "Learn through small, useful projects",
                "Improve the setup only as needed"
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white/10 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5" />
                  <p>{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <SignupCard />
        </section>
      </div>
    </PageShell>
  );
}
