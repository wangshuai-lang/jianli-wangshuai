import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import AnchorLink from '@/components/AnchorLink';

const NAV_ITEMS = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于' },
  { id: 'skills', label: '技能' },
  { id: 'experience', label: '经历' },
  { id: 'contact', label: '联系' },
];

export default function Header() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) {
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-border/60 bg-background/70 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-row items-center justify-between px-6 py-6 md:px-8">
        <AnchorLink
          href="#home"
          className="text-3xl tracking-tight text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Wang<sup className="text-xs">®</sup>
        </AnchorLink>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <AnchorLink
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm transition-colors ${
                active === item.id
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
            </AnchorLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <AnchorLink
            href="#contact"
            className="liquid-glass hidden rounded-full px-6 py-2.5 text-sm text-foreground transition-transform hover:scale-[1.03] md:inline-flex"
          >
            开启旅程
          </AnchorLink>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="liquid-glass mx-4 mb-4 flex flex-col gap-1 rounded-2xl px-6 py-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <AnchorLink
              key={item.id}
              href={`#${item.id}`}
              className={`py-2 text-base transition-colors ${
                active === item.id
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.label}
            </AnchorLink>
          ))}
          <AnchorLink
            href="#contact"
            className="liquid-glass mt-2 rounded-full px-6 py-2.5 text-center text-sm text-foreground"
          >
            开启旅程
          </AnchorLink>
        </div>
      )}
    </header>
  );
}
