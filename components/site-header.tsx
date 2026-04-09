"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Trees } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/components/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[rgba(245,243,239,0.88)] backdrop-blur-xl">
      <div className="container-shell py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="rounded-2xl bg-walnut p-2 text-white shadow-warm">
              <Trees className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-semibold tracking-tight text-walnut">TimberShop</p>
              <p className="text-sm text-steel">Start Small. Learn Fast. Build Something Real.</p>
            </div>
          </Link>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-stone-300 bg-white text-walnut lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <Menu className="h-5 w-5" />
          </button>

          <nav className="hidden flex-wrap gap-2 lg:flex">
            {navItems.map(({ href, label, icon: Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition",
                    active
                      ? "bg-walnut text-white shadow-warm"
                      : "border border-stone-300 text-walnut hover:bg-white"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>

        <nav className={cn("mt-4 grid gap-2 lg:hidden", open ? "grid" : "hidden")}>
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium",
                  active
                    ? "bg-walnut text-white shadow-warm"
                    : "border border-stone-300 bg-white text-walnut"
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
