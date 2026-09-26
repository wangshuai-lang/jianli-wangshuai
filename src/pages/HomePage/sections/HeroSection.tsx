import AnchorLink from '@/components/AnchorLink';

const BASE = (import.meta.env.MIAODA_CLIENT_BASE_PATH || '').replace(/\/$/, '') + '/';

const display = { fontFamily: "'Instrument Serif', serif" } as const;

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={`${BASE}hero-bg.mp4`}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 flex flex-col items-center px-6 pb-40 pt-32 text-center">
        <h1
          className="animate-fade-rise max-w-7xl text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl md:text-8xl"
          style={display}
        >
          精准<em className="not-italic text-muted-foreground">，自静谧中升起。</em>
        </h1>

        <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          我是王友帅，工业机器人应用与维护专业在读。熟悉 ABB、发那科工业机器人、
          AGV 装配调试与机器视觉——在喧嚣的车间里，专注把每一个零件装准、把每一台设备调稳。
        </p>

        <AnchorLink
          href="#contact"
          className="animate-fade-rise-delay-2 liquid-glass mt-12 cursor-pointer rounded-full px-14 py-5 text-base text-foreground transition-transform hover:scale-[1.03]"
        >
          开启旅程
        </AnchorLink>
      </div>
    </section>
  );
}
