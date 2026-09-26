import type { CSSProperties, MouseEvent, ReactNode } from 'react';

interface AnchorLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function AnchorLink({ href, children, className, style }: AnchorLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', href);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
}
