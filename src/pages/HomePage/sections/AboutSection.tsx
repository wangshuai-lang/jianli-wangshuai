const display = { fontFamily: "'Instrument Serif', serif" } as const;

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-8">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">关于</p>
      <h2
        className="mt-4 text-4xl font-normal text-foreground md:text-5xl"
        style={display}
      >
        关于我
      </h2>
      <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
        <p>
          我叫王友帅，2004 年生，江苏省常州技师学院工业机器人应用与维护专业在读（2023–2027）。
          持有工业机器人系统运维员（三级/高级工）、电工（四级/中级工）等职业技能等级证书。
        </p>
        <p>
          我热爱自动化与精密装配——从一颗螺纹的参数计算，到一台 AGV 小车的整机装配与线路调试，
          享受把理论变成稳定运转的设备的过程。实习中能独立完成设备装配，也擅长在团队协作里
          解决问题。
        </p>
        <p>
          目标岗位：电气、自动化方向的设备调试、装配、运维及工程师等岗位。
        </p>
      </div>
    </section>
  );
}
