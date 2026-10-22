import Link from "next/link";
import Monogram from "./Monogram";
import { nav } from "@/content/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="VIF, home">
          <Monogram className="h-8 w-auto" />
        </Link>

        <nav aria-label="Primary" className="hidden gap-8 text-sm md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-dim hover:text-paper">
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="md:hidden">
          <summary className="cursor-pointer text-sm">Menu</summary>
          <nav
            aria-label="Mobile"
            className="absolute inset-x-0 top-full flex flex-col gap-4 border-b border-line bg-ink px-6 py-5 text-sm"
          >
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
