import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Hammer, Home, Wrench, Trees, Warehouse, FolderOpen, ChevronRight, Shield, Drill, Ruler, HardHat, BookOpen, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const palette = {
  walnut: "#3E2C23",
  oak: "#A47551",
  steel: "#5E6A71",
  cream: "#F5F3EF",
  text: "#2B2B2B",
  cta: "#C0602E",
};

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "tools", label: "Tools", icon: Wrench },
  { id: "materials", label: "Materials", icon: Trees },
  { id: "workshop", label: "Workshop", icon: Warehouse },
  { id: "resources", label: "Resources", icon: BookOpen },
];

const starterProjects = [
  {
    title: "Simple Wall Shelf",
    category: "Quick Build",
    time: "2–4 hrs",
    difficulty: "Beginner",
    skills: ["Layout", "Straight cuts", "Fastening"],
    summary: "A practical first project that teaches square layout, clean cuts, and basic wall-mount alignment.",
    next: "Build a small bookcase",
  },
  {
    title: "Sawhorses",
    category: "Workshop",
    time: "3–5 hrs",
    difficulty: "Beginner",
    skills: ["Repetitive cuts", "Assembly", "Squareness"],
    summary: "Low-cost, high-utility build that immediately improves every future project by giving you a better work surface.",
    next: "Create a temporary workbench",
  },
  {
    title: "Small Storage Box",
    category: "Skill Builder",
    time: "2–3 hrs",
    difficulty: "Beginner",
    skills: ["Basic joinery", "Sanding", "Finishing"],
    summary: "A compact way to learn the full workflow from cutting through final surface prep without overwhelming complexity.",
    next: "Build a shop cabinet",
  },
  {
    title: "Plant Stand",
    category: "Home Improvement",
    time: "3–6 hrs",
    difficulty: "Beginner+",
    skills: ["Glue-up", "Stability", "Fit-up"],
    summary: "A useful project that introduces sturdier joinery and teaches how to make a build feel solid, not wobbly.",
    next: "Build a side table",
  },
];

const toolkit = [
  {
    title: "Measure & Mark",
    buy: "Tape measure, combination square, pencil, straightedge",
    why: "Most bad cuts start with bad layout. These tools improve accuracy faster than expensive machines.",
  },
  {
    title: "Cut",
    buy: "Circular saw, reliable hand saw, jigsaw",
    why: "This group covers rough breakdown, straight cuts, and simple curves without requiring a full shop footprint.",
  },
  {
    title: "Drill & Assemble",
    buy: "Drill/driver, bit set, countersink, clamps",
    why: "Assembly quality depends on straight holes, repeatable fastening, and holding parts in alignment.",
  },
  {
    title: "Refine Surfaces",
    buy: "Sanding block, sandpaper, random-orbit sander",
    why: "Surface prep is where beginner builds start looking finished instead of homemade.",
  },
];

const materialRows = [
  {
    material: "Construction Plywood",
    bestFor: "Shop fixtures, utility shelving, jigs",
    watchFor: "Wrong face grade, tear-out on visible edges",
    why: "Flat, strong, widely available, and forgiving for practical builds.",
  },
  {
    material: "Hardwood Plywood",
    bestFor: "Bookcases, cabinets, built-ins",
    watchFor: "Thin veneer faces, edge banding needs",
    why: "Stable large panels with a cleaner furniture-ready look.",
  },
  {
    material: "Poplar",
    bestFor: "Painted furniture and trim-style projects",
    watchFor: "Dents easier than harder hardwoods",
    why: "Easy to work, predictable, and friendly for beginners moving into solid wood.",
  },
  {
    material: "MDF",
    bestFor: "Painted panels, templates, dry indoor use",
    watchFor: "Heavy, dust-heavy, swells with moisture",
    why: "Smooth and stable for paint-focused applications when kept dry.",
  },
];

const workshopPhases = [
  {
    phase: "Day 1 Essentials",
    items: [
      "Stable work surface strategy",
      "Safe power access and lighting",
      "Safety glasses, hearing protection, dust protection",
      "Clear walking and cutting space",
    ],
  },
  {
    phase: "Month 1 Upgrades",
    items: [
      "Clamp and tool storage",
      "Better dust capture at the source",
      "Mobile bases or portable workstations",
      "Dedicated layout/assembly area",
    ],
  },
  {
    phase: "Later Improvements",
    items: [
      "Stationary tools only when needed",
      "Dedicated circuits and climate comfort",
      "Refined workflow zones",
      "Long-board and sheet-goods handling strategy",
    ],
  },
];

const resources = [
  "Starter project roadmap",
  "Tool buying order checklist",
  "Wood selection quick guide",
  "Small-shop setup checklist",
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: palette.cta }}>
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ color: palette.walnut }}>
        {title}
      </h2>
      <p className="text-base md:text-lg leading-7" style={{ color: palette.text }}>
        {description}
      </p>
    </div>
  );
}

function Hero({ setPage }) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border p-8 md:p-12 lg:p-16 shadow-xl" style={{ background: `linear-gradient(135deg, ${palette.cream} 0%, #efe7df 55%, #e7ddd4 100%)`, borderColor: "rgba(62,44,35,0.12)" }}>
      <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full blur-3xl opacity-30" style={{ background: palette.oak }} />
      <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full blur-3xl opacity-20" style={{ background: palette.steel }} />
      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div className="space-y-6">
          <Badge className="rounded-full px-4 py-1 text-sm" style={{ backgroundColor: "rgba(192,96,46,0.12)", color: palette.cta, border: `1px solid rgba(192,96,46,0.25)` }}>
            TimberShop • Beginner Woodworking
          </Badge>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight" style={{ color: palette.walnut }}>
              Practical woodworking for beginners.
            </h1>
            <p className="text-lg md:text-xl leading-8 max-w-2xl" style={{ color: palette.text }}>
              Start Small. Learn Fast. Build Something Real. A no-fluff site built to help DIY-capable beginners gain skills through useful projects, smart tool choices, and a workshop setup that grows with them.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button className="rounded-xl px-6 py-6 text-base shadow-lg" style={{ backgroundColor: palette.cta }} onClick={() => setPage("projects")}>
              Start with Projects <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="rounded-xl px-6 py-6 text-base bg-white/70" style={{ borderColor: "rgba(62,44,35,0.16)", color: palette.walnut }} onClick={() => setPage("tools")}>
              See Starter Tools
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {[
              ["1", "Pick a project"],
              ["2", "Gather the basics"],
              ["3", "Build with confidence"],
            ].map(([num, label]) => (
              <div key={label} className="rounded-2xl border bg-white/70 p-4 shadow-sm" style={{ borderColor: "rgba(62,44,35,0.1)" }}>
                <p className="text-sm font-semibold" style={{ color: palette.cta }}>Step {num}</p>
                <p className="mt-1 text-base font-medium" style={{ color: palette.walnut }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border bg-white/80 p-6 shadow-2xl backdrop-blur-sm" style={{ borderColor: "rgba(62,44,35,0.08)" }}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Ruler, label: "Layout" },
              { icon: Drill, label: "Assembly" },
              { icon: Hammer, label: "Projects" },
              { icon: Shield, label: "Safety" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl p-5 border shadow-sm" style={{ backgroundColor: palette.cream, borderColor: "rgba(62,44,35,0.08)" }}>
                <Icon className="h-6 w-6 mb-3" style={{ color: palette.cta }} />
                <p className="text-sm uppercase tracking-wide" style={{ color: palette.steel }}>Core Focus</p>
                <p className="text-lg font-semibold mt-1" style={{ color: palette.walnut }}>{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl p-5" style={{ backgroundColor: palette.walnut }}>
            <p className="text-sm uppercase tracking-[0.18em] text-white/70">Philosophy</p>
            <p className="mt-2 text-xl font-semibold text-white">No fluff. Just build.</p>
            <p className="mt-2 text-sm leading-6 text-white/80">Every page should help a beginner decide what to do next and make measurable progress with less confusion.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage({ setPage }) {
  return (
    <div className="space-y-14">
      <Hero setPage={setPage} />

      <section className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Start with useful projects",
            text: "Beginner builds should teach one or two repeatable skills while creating something you will actually use.",
          },
          {
            title: "Buy tools in the right order",
            text: "Layout, cutting, drilling, clamping, and surface prep create the biggest capability jump per dollar.",
          },
          {
            title: "Build the shop that builds your work",
            text: "A better work surface, safer setup, and simple workflow improvements matter more than chasing the perfect shop.",
          },
        ].map((item) => (
          <Card key={item.title} className="rounded-[1.5rem] border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl" style={{ color: palette.walnut }}>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7" style={{ color: palette.text }}>{item.text}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Start with simple wins that compound"
          description="These projects are lightweight on complexity but strong on skill-building. Each one teaches core basics and points naturally to the next build."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {starterProjects.slice(0, 4).map((project) => (
            <Card key={project.title} className="rounded-[1.5rem] border-0 shadow-lg overflow-hidden">
              <div className="h-32" style={{ background: `linear-gradient(135deg, ${palette.oak} 0%, ${palette.walnut} 100%)` }} />
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="outline" className="rounded-full">{project.category}</Badge>
                  <span className="text-sm" style={{ color: palette.steel }}>{project.time}</span>
                </div>
                <CardTitle className="text-xl" style={{ color: palette.walnut }}>{project.title}</CardTitle>
                <CardDescription>{project.difficulty}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-7" style={{ color: palette.text }}>{project.summary}</p>
                <Button variant="ghost" className="px-0" style={{ color: palette.cta }} onClick={() => setPage("projects")}>
                  View project path <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr] items-stretch">
        <Card className="rounded-[1.75rem] border-0 shadow-xl" style={{ backgroundColor: palette.walnut }}>
          <CardHeader>
            <CardTitle className="text-3xl text-white">No fluff. Just build.</CardTitle>
            <CardDescription className="text-white/70">A practical philosophy for beginners who want real progress.</CardDescription>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-5 text-white/90">
            {[
              "Keep steps concise and actionable",
              "Use beginner-friendly material choices",
              "Learn through small, useful projects",
              "Improve the setup only as needed",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-white/10 p-4">
                <CheckCircle2 className="h-5 w-5 mt-0.5" />
                <p>{item}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-[1.75rem] border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl" style={{ color: palette.walnut }}>Get free beginner resources</CardTitle>
            <CardDescription>Project roadmaps, checklists, and simple guidance built for DIY-capable beginners.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Email address" className="h-12 rounded-xl bg-white" />
            <Button className="w-full h-12 rounded-xl text-base" style={{ backgroundColor: palette.cta }}>
              Join the list
            </Button>
            <p className="text-sm leading-6" style={{ color: palette.steel }}>
              This is a visual content-site signup form for now, designed to reserve space for future email capture.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Projects"
        title="A beginner project path built around momentum"
        description="These are lightweight project summaries designed to help new woodworkers choose a build that matches their current confidence level while learning a small set of repeatable skills."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {starterProjects.map((project) => (
          <Card key={project.title} className="rounded-[1.5rem] border-0 shadow-lg">
            <CardHeader>
              <div className="flex flex-wrap gap-2">
                <Badge>{project.category}</Badge>
                <Badge variant="outline">{project.time}</Badge>
                <Badge variant="outline">{project.difficulty}</Badge>
              </div>
              <CardTitle className="text-2xl mt-2" style={{ color: palette.walnut }}>{project.title}</CardTitle>
              <CardDescription>{project.summary}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: palette.steel }}>Skills you build</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="rounded-full">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: palette.steel }}>Typical flow</p>
                <ol className="mt-3 grid gap-2 pl-5 list-decimal" style={{ color: palette.text }}>
                  <li>Break down material to rough size</li>
                  <li>Refine cuts and dry fit the parts</li>
                  <li>Assemble square and check alignment</li>
                  <li>Sand, ease edges, and apply finish if needed</li>
                </ol>
              </div>
              <div className="rounded-2xl p-4" style={{ backgroundColor: palette.cream }}>
                <p className="text-sm font-semibold" style={{ color: palette.cta }}>What this unlocks next</p>
                <p className="mt-1 font-medium" style={{ color: palette.walnut }}>{project.next}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="rounded-[1.75rem] border-0 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl" style={{ color: palette.walnut }}>Skill Ladder</CardTitle>
          <CardDescription>Use projects to build capability in order, not at random.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              "Workholding & layout",
              "Boxes & shelves",
              "Plywood casework",
              "Furniture upgrades",
            ].map((step, index) => (
              <div key={step} className="rounded-2xl border p-5 shadow-sm" style={{ borderColor: "rgba(62,44,35,0.1)" }}>
                <p className="text-sm font-semibold" style={{ color: palette.cta }}>Step {index + 1}</p>
                <p className="mt-2 text-lg font-medium" style={{ color: palette.walnut }}>{step}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ToolsPage() {
  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Tools"
        title="Buy for workflow, not for status"
        description="A strong beginner toolkit follows the actual sequence of building: measure, cut, drill, clamp, refine. Start there, then add machines only when project constraints demand it."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {toolkit.map((item) => (
          <Card key={item.title} className="rounded-[1.5rem] border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl" style={{ color: palette.walnut }}>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: palette.steel }}>Buy first</p>
                <p className="mt-2 leading-7" style={{ color: palette.text }}>{item.buy}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: palette.steel }}>Why it matters</p>
                <p className="mt-2 leading-7" style={{ color: palette.text }}>{item.why}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="rounded-[1.75rem] border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl" style={{ color: palette.walnut }}>Suggested buying order</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4 pl-5 list-decimal" style={{ color: palette.text }}>
              <li>Drill/driver + layout tools</li>
              <li>Circular saw strategy for lumber and sheet goods</li>
              <li>Random-orbit sander</li>
              <li>Compact router</li>
              <li>Bigger stationary tools only when repetition, accuracy, or volume truly require them</li>
            </ol>
          </CardContent>
        </Card>
        <Card className="rounded-[1.75rem] border-0 shadow-xl" style={{ backgroundColor: palette.walnut }}>
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
  );
}

function MaterialsPage() {
  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Materials"
        title="Pick materials that match the project, not the fantasy"
        description="Beginners succeed faster when they use stable, forgiving materials that fit the environment. The right choice is usually the one that cuts cleanly, stays predictable, and supports the finish you want."
      />

      <div className="grid gap-6">
        {materialRows.map((row) => (
          <Card key={row.material} className="rounded-[1.5rem] border-0 shadow-lg">
            <CardContent className="p-6 grid gap-4 md:grid-cols-4 md:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: palette.steel }}>Material</p>
                <p className="mt-2 text-xl font-semibold" style={{ color: palette.walnut }}>{row.material}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: palette.steel }}>Best for</p>
                <p className="mt-2 leading-7" style={{ color: palette.text }}>{row.bestFor}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: palette.steel }}>Watch for</p>
                <p className="mt-2 leading-7" style={{ color: palette.text }}>{row.watchFor}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: palette.steel }}>Why it works</p>
                <p className="mt-2 leading-7" style={{ color: palette.text }}>{row.why}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="rounded-[1.75rem] border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl" style={{ color: palette.walnut }}>Beginner buying tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 list-disc pl-5" style={{ color: palette.text }}>
              <li>Use plywood when you want flatter, more predictable large panels.</li>
              <li>Use paint-grade hardwoods like poplar when you want solid wood without premium complexity.</li>
              <li>Avoid moisture-sensitive sheet goods for exposed or damp environments.</li>
              <li>Match the material to the finish: painted, stain-grade, utility, or outdoor use.</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="rounded-[1.75rem] border-0 shadow-xl" style={{ background: `linear-gradient(135deg, ${palette.walnut} 0%, ${palette.oak} 100%)` }}>
          <CardHeader>
            <CardTitle className="text-2xl text-white">Quick decision rule</CardTitle>
          </CardHeader>
          <CardContent className="text-white/90 leading-7">
            <p>
              For shop projects, utility shelving, and early practice, start with plywood. For painted furniture, move to poplar or painted panel combinations. For cleaner built-ins and bookcases, hardwood plywood is usually the best next step.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function WorkshopPage() {
  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Workshop"
        title="Set up a shop that works now and improves later"
        description="A beginner workshop should be treated as a phased system. Start with safe workholding, enough room to move, and a clean workflow. Improve comfort and capacity only when it removes real friction."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {workshopPhases.map((phase) => (
          <Card key={phase.phase} className="rounded-[1.5rem] border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl" style={{ color: palette.walnut }}>{phase.phase}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 list-disc pl-5" style={{ color: palette.text }}>
                {phase.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="rounded-[1.75rem] border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl" style={{ color: palette.walnut }}>Small-space layouts that work</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" style={{ color: palette.text }}>
            <div className="rounded-2xl p-4" style={{ backgroundColor: palette.cream }}>
              <p className="font-semibold" style={{ color: palette.walnut }}>One-wall shop</p>
              <p className="mt-1 leading-7">Bench and storage live on one wall while tools come out only when needed.</p>
            </div>
            <div className="rounded-2xl p-4" style={{ backgroundColor: palette.cream }}>
              <p className="font-semibold" style={{ color: palette.walnut }}>Perimeter + center surface</p>
              <p className="mt-1 leading-7">Keep tools on the perimeter and use one central work surface as the hub for layout, assembly, and support.</p>
            </div>
            <div className="rounded-2xl p-4" style={{ backgroundColor: palette.cream }}>
              <p className="font-semibold" style={{ color: palette.walnut }}>Mobile garage shop</p>
              <p className="mt-1 leading-7">Use rolling stations so the shop can flex between woodworking and shared household use.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-[1.75rem] border-0 shadow-xl" style={{ backgroundColor: palette.walnut }}>
          <CardHeader>
            <CardTitle className="text-2xl text-white">Safety system</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-white/85">
            <div className="flex gap-3 rounded-2xl bg-white/10 p-4">
              <HardHat className="h-5 w-5 mt-0.5" />
              <div>
                <p className="font-semibold">Housekeeping</p>
                <p className="text-sm leading-6 mt-1">Avoid letting dust accumulate. Clean in ways that do not create airborne dust clouds.</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-2xl bg-white/10 p-4">
              <Shield className="h-5 w-5 mt-0.5" />
              <div>
                <p className="font-semibold">Electrical awareness</p>
                <p className="text-sm leading-6 mt-1">Use safe power distribution, grounded tools, and a layout that avoids cord chaos and trip hazards.</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-2xl bg-white/10 p-4">
              <Hammer className="h-5 w-5 mt-0.5" />
              <div>
                <p className="font-semibold">Finishing fire risk</p>
                <p className="text-sm leading-6 mt-1">Treat oily rags and finishing waste carefully and store/dispose of them appropriately.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function ResourcesPage() {
  const [email, setEmail] = useState("");
  const message = useMemo(() => {
    if (!email) return "";
    return "Thanks — this demo form shows where future resource signup functionality can be connected.";
  }, [email]);

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Resources"
        title="Useful extras for beginners who want to move faster"
        description="This page is designed to support the content site with practical downloads, checklists, and reference tools that reinforce the core pages."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {resources.map((item) => (
          <Card key={item} className="rounded-[1.5rem] border-0 shadow-lg">
            <CardContent className="p-6">
              <p className="text-lg font-semibold" style={{ color: palette.walnut }}>{item}</p>
              <p className="mt-3 leading-7" style={{ color: palette.text }}>
                Lightweight, actionable guidance designed to help beginners take the next step without getting overwhelmed.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="rounded-[1.75rem] border-0 shadow-xl overflow-hidden">
        <div className="grid lg:grid-cols-[1fr_0.9fr]">
          <div className="p-8 md:p-10" style={{ backgroundColor: palette.walnut }}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Stay Connected</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">Get future plans, templates, and beginner tools</h3>
            <p className="mt-4 text-white/80 leading-7">
              This premium content-site layout includes a clear resource CTA while keeping the current build lightweight and focused on content.
            </p>
          </div>
          <div className="p-8 md:p-10" style={{ backgroundColor: palette.cream }}>
            <div className="space-y-4">
              <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="h-12 rounded-xl bg-white" />
              <Button className="w-full h-12 rounded-xl text-base" style={{ backgroundColor: palette.cta }}>
                Get updates
              </Button>
              <p className="text-sm leading-6" style={{ color: palette.steel }}>{message || "Signup is visually staged here for a future email integration if you ever want it."}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function TimberShopWebsite() {
  const [page, setPage] = useState("home");

  const CurrentPage = {
    home: <HomePage setPage={setPage} />,
    projects: <ProjectsPage />,
    tools: <ToolsPage />,
    materials: <MaterialsPage />,
    workshop: <WorkshopPage />,
    resources: <ResourcesPage />,
  }[page];

  return (
    <div className="min-h-screen" style={{ backgroundColor: palette.cream, color: palette.text }}>
      <div className="sticky top-0 z-50 border-b backdrop-blur-xl bg-[rgba(245,243,239,0.88)]" style={{ borderColor: "rgba(62,44,35,0.08)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-2xl font-semibold tracking-tight" style={{ color: palette.walnut }}>TimberShop</p>
            <p className="text-sm" style={{ color: palette.steel }}>Start Small. Learn Fast. Build Something Real.</p>
          </div>
          <nav className="flex flex-wrap gap-2">
            {navItems.map(({ id, label, icon: Icon }) => {
              const active = page === id;
              return (
                <button
                  key={id}
                  onClick={() => setPage(id)}
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all"
                  style={{
                    backgroundColor: active ? palette.walnut : "transparent",
                    color: active ? "white" : palette.walnut,
                    border: active ? "1px solid transparent" : "1px solid rgba(62,44,35,0.10)",
                    boxShadow: active ? "0 8px 24px rgba(62,44,35,0.18)" : "none",
                  }}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28 }}
        >
          {CurrentPage}
        </motion.div>
      </main>
    </div>
  );
}
