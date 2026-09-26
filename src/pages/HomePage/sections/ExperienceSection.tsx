const EXPERIENCE = [
  {
    period: '2026.09 至今',
    title: 'AGV 小车装配实习',
    org: '常州 · 自动化 / 物流装备方向企业',
    points: [
      '参与 AGV 小车装配全流程：识读机械图纸、配件选型与装配，从多人协作到独立完成整机安装',
      '配合资深工程师完成设备线路安装与调试，掌握现场调试方法，能按标准排查装配问题',
      '系统学习机械螺纹标准（GB/T）与参数计算，可独立完成内外螺纹尺寸计算及螺栓强度等级校核',
      '严格遵守企业安全操作规程，实习期间每周实操约 19 小时、理论学习约 3 小时',
    ],
  },
];

const display = { fontFamily: "'Instrument Serif', serif" } as const;

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-8">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">经历</p>
      <h2
        className="mt-4 text-4xl font-normal text-foreground md:text-5xl"
        style={display}
      >
        实习经历
      </h2>

      <div className="mt-10 space-y-6">
        {EXPERIENCE.map((item) => (
          <div key={item.title} className="liquid-glass rounded-2xl p-6 md:p-8">
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <h3 className="text-xl font-medium text-foreground">{item.title}</h3>
              <span className="text-sm text-muted-foreground">{item.period}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
            <ul className="mt-5 space-y-2.5">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-foreground/90 md:text-base"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/60" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
