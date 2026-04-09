import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { materialRows } from "@/components/site-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Materials"
};

export default function MaterialsPage() {
  return (
    <PageShell>
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Materials"
          title="Pick materials that match the project, not the fantasy"
          description="Beginners succeed faster when they use stable, forgiving materials that fit the environment. The right choice is usually the one that cuts cleanly, stays predictable, and supports the finish you want."
        />

        <div className="grid gap-6">
          {materialRows.map((row) => (
            <Card key={row.material}>
              <CardContent className="grid gap-4 p-6 md:grid-cols-4 md:items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-steel">Material</p>
                  <p className="mt-2 text-xl font-semibold text-walnut">{row.material}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-steel">Best for</p>
                  <p className="mt-2 leading-7 text-charcoal">{row.bestFor}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-steel">Watch for</p>
                  <p className="mt-2 leading-7 text-charcoal">{row.watchFor}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-steel">Why it works</p>
                  <p className="mt-2 leading-7 text-charcoal">{row.why}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Beginner buying tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-3 pl-5 text-charcoal">
                <li>Use plywood when you want flatter, more predictable large panels.</li>
                <li>Use paint-grade hardwoods like poplar when you want solid wood without premium complexity.</li>
                <li>Avoid moisture-sensitive sheet goods for exposed or damp environments.</li>
                <li>Match the material to the finish: painted, stain-grade, utility, or outdoor use.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-timber-warm text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Quick decision rule</CardTitle>
            </CardHeader>
            <CardContent className="leading-7 text-white/90">
              <p>
                For shop projects, utility shelving, and early practice, start with plywood. For painted furniture, move to poplar or painted panel combinations. For cleaner built-ins and bookcases, hardwood plywood is usually the best next step.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </PageShell>
  );
}
