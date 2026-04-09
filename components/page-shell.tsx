import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <SiteHeader />
      <main className="container-shell page-space">{children}</main>
      <SiteFooter />
    </div>
  );
}
