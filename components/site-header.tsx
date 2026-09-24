import Link from "next/link";

import { SiteNav } from "@/components/site-nav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Grogan Development Group">
        Grogan <span className="wordmark-rest">Development Group</span>
      </Link>
      <SiteNav />
    </header>
  );
}
