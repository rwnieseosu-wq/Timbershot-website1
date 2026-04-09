import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { resources } from "@/components/site-data";
import { SignupCard } from "@/components/signup-card";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Resources"
};

export default function ResourcesPage() {
  return (
    <PageShell>
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Resources"
          title="Useful extras for beginners who want to move faster"
          description="This page is designed to support the content site with practical downloads, checklists, and reference tools that reinforce the core pages."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {resources.map((item) => (
            <Card key={item}>
              <CardContent className="p-6">
                <p className="text-lg font-semibold text-walnut">{item}</p>
                <p className="mt-3 leading-7 text-charcoal">
                  Lightweight, actionable guidance designed to help beginners take the next step without getting overwhelmed.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card className="overflow-hidden bg-walnut text-white">
            <div className="p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Stay Connected</p>
              <h2 className="mt-3 text-3xl font-semibold">Get future plans, templates, and beginner tools</h2>
              <p className="mt-4 leading-7 text-white/80">
                This premium content-site layout includes a clear resource CTA while keeping the current build lightweight and focused on content.
              </p>
            </div>
          </Card>
          <SignupCard compact />
        </div>
      </div>
    </PageShell>
  );
}
