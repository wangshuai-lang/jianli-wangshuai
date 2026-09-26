const SKILLS = [
  {
    title: '工业机器人',
    desc: 'ABB、发那科工业机器人操作与运维基础，熟悉设备现场调试流程',
  },
  {
    title: '机器视觉',
    desc: '视觉系统调试应用基础，能配合完成视觉系统的现场调试',
  },
  {
    title: '电气电工',
    desc: '持电工中级工证书，掌握电气设备安装、接线与维护基础',
  },
  {
    title: '机械装配',
    desc: '机械图纸识读、螺纹标准与参数计算，可独立完成自动化设备装配与调试',
  },
  {
    title: '软件工具',
    desc: '熟练使用 AutoCAD 制图、Photoshop 图像处理及 MS Office 办公软件',
  },
];

const CERTS = [
  { name: '工业机器人系统运维员', level: '三级 / 高级工', date: '2025.02' },
  { name: '电工', level: '四级 / 中级工', date: '2026.02' },
  { name: 'AutoCAD 应用（建筑方向）', level: '中级', date: '2022.06' },
  { name: 'Photoshop 应用技能', level: '中级', date: '2021.12' },
  { name: '全国计算机等级考试（MS Office）', level: '一级 / 良好', date: '2021.03' },
  { name: '普通话水平测试', level: '二级乙等（82.9 分）', date: '2021.06' },
];

const display = { fontFamily: "'Instrument Serif', serif" } as const;

export default function SkillsSection() {
  return (
    <section id="skills" className="border-y border-border/60 bg-card/30">
      <div className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-8">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">技能</p>
        <h2
          className="mt-4 text-4xl font-normal text-foreground md:text-5xl"
          style={display}
        >
          专业技能
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill) => (
            <div
              key={skill.title}
              className="liquid-glass rounded-2xl p-6 transition-transform hover:scale-[1.02]"
            >
              <h3 className="text-lg font-medium text-foreground">{skill.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{skill.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3
            className="text-3xl font-normal text-foreground md:text-4xl"
            style={display}
          >
            资格证书
          </h3>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <div className="hidden grid-cols-[1fr_1fr_auto] gap-4 bg-muted/40 px-6 py-3 text-xs uppercase tracking-wider text-muted-foreground sm:grid">
              <span>证书名称</span>
              <span>等级 / 成绩</span>
              <span>取得时间</span>
            </div>
            {CERTS.map((cert) => (
              <div
                key={cert.name}
                className="grid grid-cols-1 gap-1 border-t border-border/60 px-6 py-4 sm:grid-cols-[1fr_1fr_auto] sm:items-center sm:gap-4"
              >
                <span className="text-sm text-foreground">{cert.name}</span>
                <span className="text-sm text-muted-foreground">{cert.level}</span>
                <span className="text-sm text-muted-foreground">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
