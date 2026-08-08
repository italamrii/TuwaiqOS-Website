const roadmap = [
  ["01–06", "FOUNDATION", "Complete", "Interrupts, memory, scheduler, Ring 3, desktop foundation, storage and VFS."],
  ["07", "HARDWARE & NETWORKING", "Next", "HAL/driver framework, PCI discovery, networking and selected real hardware support."],
  ["08", "APPLICATION PLATFORM", "Planned", "Stable ABI, IPC, permissions, SDK foundations and native application services."],
  ["09", "APPS, PACKAGES & UPDATES", "Planned", "Native apps, signed packages, package management and transactional updates."],
  ["10", "COMPATIBILITY", "Optional", "POSIX/Linux userspace compatibility without replacing the Tuwaiq Kernel."],
  ["11", "TUWAIQ AI", "Planned", "Offline-first assistant and agent runtime in userspace with explicit permissions and auditability."],
  ["12", "SECURITY & QUALIFICATION", "Planned", "Fuzzing, hardening, reproducible builds, sustained stability and controlled pilots."],
];
export default function Roadmap(){return <main className="subpage shell"><header className="subnav"><a href="/">← TuwaiqOS</a><a href="https://github.com/italamrii/TuwaiqOS">GitHub ↗</a></header><div className="pageTitle"><span className="kicker">ROADMAP / CURRENT</span><h1>نبنيها مرحلة بمرحلة.</h1><p>Phase 6 مكتملة. الطريق الآن مفتوح نحو العتاد، الشبكات، منصة التطبيقات ثم طبقات التوافق والذكاء والأمان النهائي.</p></div><div className="roadmapList">{roadmap.map(([n,t,s,d])=><article key={n}><span className="roadnum">{n}</span><div><b>{t}</b><p>{d}</p></div><em className={s==="Complete"?"done":s==="Next"?"active":""}>{s}</em></article>)}</div></main>}
