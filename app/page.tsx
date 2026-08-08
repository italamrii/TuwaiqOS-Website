const phases = [
  ["01", "Interrupt Architecture", "Real x86_64 interrupts, GDT/TSS, PIC/PIT and interrupt-driven input."],
  ["02", "Memory Management", "Paging, physical frame allocation and a mapped kernel heap."],
  ["03", "Concurrency", "Real task stacks, context switching and timer-driven preemption."],
  ["04", "User Mode", "Ring 3, syscalls, isolated address spaces and ELF user processes."],
  ["05", "Desktop Foundation", "Display, mouse, unified input and the first Ring-3 Tuwaiq Desktop."],
  ["06", "Storage, VFS & Apps", "VFS, path-aware storage and filesystem-backed native application foundations."],
];

const facts = [
  ["x86_64", "Target architecture"],
  ["Rust", "Kernel language"],
  ["100 Hz", "Kernel timer"],
  ["Ring 3", "User isolation"],
];

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <nav className="nav">
          <a className="brand" href="/" aria-label="TuwaiqOS home"><span className="mark">T</span><span>TuwaiqOS</span></a>
          <div className="navlinks">
            <a href="#progress">Progress</a>
            <a href="/roadmap">Roadmap</a>
            <a href="/contributors">Contributors</a>
            <a href="/download">Download</a>
          </div>
          <a className="navcta" href="https://github.com/italamrii/TuwaiqOS" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>

        <div className="heroGrid">
          <div>
            <div className="eyebrow"><span className="pulse" /> PHASE 6 COMPLETE · DEVELOPMENT BUILD</div>
            <h1>نواة مستقلة.<br/><span>نظام سعودي يُبنى من الصفر.</span></h1>
            <p className="lead">TuwaiqOS نظام تشغيل تجريبي مفتوح المصدر بنواة مستقلة مكتوبة بـ Rust. وصلنا من الإقلاع الأول إلى العزل، تعدد المهام، سطح المكتب، والآن طبقة التخزين وVFS وتشغيل التطبيقات من نظام الملفات.</p>
            <div className="actions">
              <a className="primary" href="/download">تحميل وتجربة النظام</a>
              <a className="secondary" href="/roadmap">استكشف خارطة الطريق</a>
            </div>
          </div>
          <div className="terminalCard" aria-label="TuwaiqOS boot status">
            <div className="terminalHead"><span/><span/><span/><b>tuwaiq://kernel/status</b></div>
            <pre>{`TuwaiqOS kernel_main: booting\n[ OK ] paging + NX\n[ OK ] scheduler / preemption\n[ OK ] Ring 3 / process isolation\n[ OK ] VFS root mounted\n[ OK ] filesystem app path\n[ OK ] desktop foundation\n\nphase6: COMPLETE\nnext: hardware + networking_`}</pre>
          </div>
        </div>

        <div className="factbar">{facts.map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </section>

      <section className="section shell" id="progress">
        <div className="sectionHead">
          <div><div className="kicker">BUILD STATUS / 06</div><h2>من Kernel إلى نظام قابل للاستخدام</h2></div>
          <p>كل مرحلة هنا مبنية فوق التي قبلها، مع اختبارات QEMU وعزل حقيقي بين النواة وبرامج المستخدم.</p>
        </div>
        <div className="phaseGrid">
          {phases.map(([num,title,desc]) => (
            <article className="phase" key={num}>
              <div className="phaseTop"><span>{num}</span><b>COMPLETE ✓</b></div>
              <h3>{title}</h3><p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="phase6 shell">
        <div className="phase6Label">LATEST MILESTONE</div>
        <div className="phase6Content">
          <div><span className="big06">06</span><h2>Storage, VFS<br/>& Real Applications</h2></div>
          <div className="checklist">
            <p><span>✓</span> VFS and root filesystem foundation</p>
            <p><span>✓</span> Path-aware filesystem operations</p>
            <p><span>✓</span> User ↔ kernel file ABI foundation</p>
            <p><span>✓</span> Filesystem-backed native app path</p>
            <p><span>✓</span> Kernel health and QEMU smoke validation</p>
          </div>
        </div>
      </section>

      <section className="next shell">
        <span className="kicker">NEXT / PHASE 7</span>
        <h2>Hardware & Networking.</h2>
        <p>الخطوة القادمة تنقل TuwaiqOS أقرب للجهاز الحقيقي: طبقة تعريفات منظمة، اكتشاف العتاد، الشبكات وبناء أساس للتوسع على فئات أجهزة متعددة.</p>
        <a href="/roadmap">شاهد الخطة الكاملة ←</a>
      </section>

      <footer className="footer shell">
        <div className="brand"><span className="mark">T</span><span>TuwaiqOS</span></div>
        <p>Independent at the core. Compatible by design.</p>
        <div><a href="https://t.me/TuwaiqOS" target="_blank" rel="noreferrer">Telegram</a><a href="https://github.com/italamrii/TuwaiqOS" target="_blank" rel="noreferrer">GitHub</a></div>
      </footer>
    </main>
  );
}
