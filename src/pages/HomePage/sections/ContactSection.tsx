import { Mail, MapPin, Phone } from 'lucide-react';
import AnchorLink from '@/components/AnchorLink';

const CONTACTS = [
  { icon: Phone, label: '电话', value: '____________' },
  { icon: Mail, label: '邮箱', value: '____________' },
  { icon: MapPin, label: '坐标', value: '江苏 · 常州' },
];

const display = { fontFamily: "'Instrument Serif', serif" } as const;

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-border/60 bg-card/30 scroll-mt-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center md:px-8">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">联系</p>
        <h2
          className="mt-4 max-w-4xl text-4xl font-normal leading-tight text-foreground md:text-6xl"
          style={display}
        >
          Let&apos;s build something precise together.
        </h2>

        <div className="mt-10 flex flex-col items-center gap-3">
          {CONTACTS.map((item) => (
            <div key={item.label} className="flex items-center gap-3 text-muted-foreground">
              <item.icon className="h-4 w-4" />
              <span className="text-sm">{item.label}</span>
              <span className="text-sm text-foreground">{item.value}</span>
            </div>
          ))}
        </div>

        <AnchorLink
          href="#home"
          className="liquid-glass mt-12 cursor-pointer rounded-full px-14 py-5 text-base text-foreground transition-transform hover:scale-[1.03]"
        >
          开启旅程
        </AnchorLink>
      </div>
    </section>
  );
}
