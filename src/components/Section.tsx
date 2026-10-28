export default function Section({
  id,
  title,
  index,
  eyebrow,
  intro,
  children,
}: {
  id: string;
  title: string;
  index: string;
  eyebrow: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="content-section">
      <div className="section-shell">
        <header className="section-heading" data-reveal>
          <span className="section-index">{index} <i /></span>
          <p className="section-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p className="section-intro">{intro}</p>
        </header>
        <div className="section-content">{children}</div>
      </div>
    </section>
  );
}
