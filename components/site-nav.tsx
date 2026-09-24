"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/basin", label: "Basin" },
  { href: "/start", label: "Start" },
] as const;

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="nav" aria-label="Pages">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={pathname === item.href ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
