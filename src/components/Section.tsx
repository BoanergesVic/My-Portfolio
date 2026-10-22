export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-12">
        <h2 className="font-display text-2xl italic text-dim md:col-span-3">{title}</h2>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}
