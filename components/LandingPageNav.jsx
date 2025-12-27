"use client";

import { usePathname } from "next/navigation";

export function LandingPageNav() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <div className="hidden md:flex items-center gap-8">
      <a
        href="#features"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        Features
      </a>
      <a
        href="#how-it-works"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        How it Works
      </a>
      <a
        href="#limited"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        Join Now
      </a>
    </div>
  );
}