import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { toolkit } from "@/components/site-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Tools"
};

export default function ToolsPage() {
  return (
    <PageShell>
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Tools"
          title="Buy for workflow, not for status"
          description="A strong beginner toolkit follows the actual sequence of building: measure, cut, drill, clamp, refine. Start there, then add machines only when project constraints demand it."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {toolkit.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-steel">Buy first</p>
                  <p className="mt-2 leading-7 text-charcoal">{item.buy}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-steel">Why it matters</p>
                  <p className="mt-2 leading-7 text-charcoal">{item.why}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Suggested buying order</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal space-y-4 pl-5 text-charcoal">
                <li>Drill/driver + layout tools</li>
                <li>Circular saw strategy for lumber and sheet goods</li>
                <li>Random-orbit sander</li>
                <li>Compact router</li>
                <li>Bigger stationary tools only when repetition, accuracy, or volume truly require them</li>
              </ol>
            </CardContent>
          </Card>
          <Card className="bg-walnut text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Safety belongs on the tools page</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-white/85">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-semibold">Dust</p>
                <p className="mt-1 text-sm leading-6">Capture at the source when possible. Dust control is part of tool selection, not a later add-on.</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-semibold">Noise</p>
                <p className="mt-1 text-sm leading-6">Hearing protection should be routine around loud power tools, especially during repeated use.</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-semibold">Sharpness</p>
                <p className="mt-1 text-sm leading-6">Sharp edges reduce force, improve results, and help keep technique safer and more controlled.</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </PageShell>
  );
}
