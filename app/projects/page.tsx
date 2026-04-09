import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { starterProjects } from "@/components/site-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Projects"
          title="A beginner project path built around momentum"
          description="These are lightweight project summaries designed to help new woodworkers choose a build that matches their current confidence level while learning a small set of repeatable skills."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {starterProjects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <div className="flex flex-wrap gap-2">
                  <Badge>{project.category}</Badge>
                  <Badge variant="outline">{project.time}</Badge>
                  <Badge variant="outline">{project.difficulty}</Badge>
                </div>
                <CardTitle className="mt-2 text-2xl">{project.title}</CardTitle>
                <CardDescription>{project.summary}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-steel">Skills you build</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-steel">Typical flow</p>
                  <ol className="mt-3 grid list-decimal gap-2 pl-5 text-charcoal">
                    <li>Break down material to rough size</li>
                    <li>Refine cuts and dry fit the parts</li>
                    <li>Assemble square and check alignment</li>
                    <li>Sand, ease edges, and apply finish if needed</li>
                  </ol>
                </div>
                <div className="rounded-2xl bg-cream p-4">
                  <p className="text-sm font-semibold text-ember">What this unlocks next</p>
                  <p className="mt-1 font-medium text-walnut">{project.next}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Skill Ladder</CardTitle>
            <CardDescription>Use projects to build capability in order, not at random.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              {[
                "Workholding & layout",
                "Boxes & shelves",
                "Plywood casework",
                "Furniture upgrades"
              ].map((step, index) => (
                <div key={step} className="rounded-2xl border border-walnut/10 p-5 shadow-sm">
                  <p className="text-sm font-semibold text-ember">Step {index + 1}</p>
                  <p className="mt-2 text-lg font-medium text-walnut">{step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
