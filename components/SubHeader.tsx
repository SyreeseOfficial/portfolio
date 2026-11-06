import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const LINKS = [
  ['Archive', '/archive'],
  ['Writing', '/writing'],
  ['Changelog', '/changelog'],
];

export default function SubHeader({ active }: { active?: string }) {
  return (
    <header className="site-header sub">
      <Link href="/" aria-label="Home" className="logo">
        <span>SD</span>
      </Link>
      <div className="sub-right">
        <nav aria-label="Site">
          {LINKS.map(([label, href]) => (
            <Link key={href} href={href} aria-current={label === active ? 'page' : undefined}>
              {label.toUpperCase()}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
