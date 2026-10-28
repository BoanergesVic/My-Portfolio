import Link from "next/link";
import Monogram from "./Monogram";
import { nav } from "@/content/site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" aria-label="VIF, home" className="brand-link">
          <Monogram className="h-8 w-auto" />
          <span className="brand-link__name">VICTOR FADEYI<span>TECHNOLOGY / CREATIVE</span></span>
        </Link>

        <nav aria-label="Primary" className="desktop-nav">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="mobile-menu">
          <summary><span>Menu</span><i aria-hidden="true" /></summary>
          <nav aria-label="Mobile">
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
