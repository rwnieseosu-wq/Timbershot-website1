import { HardHat, Hammer, Shield } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { workshopPhases } from "@/components/site-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Workshop"
};

export default function WorkshopPage() {
  return (
    <PageShell>
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Workshop"
          title="Set up a shop that works now and improves later"
          description="A beginner workshop should be treated as a phased system. Start with safe workholding, enough room to move, and a clean workflow. Improve comfort and capacity only when it removes real friction."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {workshopPhases.map((phase) => (
            <Card key={phase.phase}>
              <CardHeader>
                <CardTitle>{phase.phase}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-3 pl-5 text-charcoal">
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Small-space layouts that work</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-charcoal">
              {[
                ["One-wall shop", "Bench and storage live on one wall while tools come out only when needed."],
                ["Perimeter + center surface", "Keep tools on the perimeter and use one central work surface as the hub for layout, assembly, and support."],
                ["Mobile garage shop", "Use rolling stations so the shop can flex between woodworking and shared household use."]
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl bg-cream p-4">
                  <p className="font-semibold text-walnut">{title}</p>
                  <p className="mt-1 leading-7">{text}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-walnut text-white">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Safety system</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-white/85">
              <div className="flex gap-3 rounded-2xl bg-white/10 p-4">
                <HardHat className="mt-0.5 h-5 w-5" />
                <div>
                  <p className="font-semibold">Housekeeping</p>
                  <p className="mt-1 text-sm leading-6">Avoid letting dust accumulate. Clean in ways that do not create airborne dust clouds.</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-2xl bg-white/10 p-4">
                <Shield className="mt-0.5 h-5 w-5" />
                <div>
                  <p className="font-semibold">Electrical awareness</p>
                  <p className="mt-1 text-sm leading-6">Use safe power distribution, grounded tools, and a layout that avoids cord chaos and trip hazards.</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-2xl bg-white/10 p-4">
                <Hammer className="mt-0.5 h-5 w-5" />
                <div>
                  <p className="font-semibold">Finishing fire risk</p>
                  <p className="mt-1 text-sm leading-6">Treat oily rags and finishing waste carefully and store or dispose of them appropriately.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </PageShell>
  );
}
