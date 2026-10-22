import Section from "@/components/Section";
import { techAreas, creativeAreas, contact } from "@/content/site";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
        <div className="rule-draw mb-12 h-px w-full bg-paper" />
        <p className="mb-6 text-dim">Victor Iyanuoluwa Fadeyi</p>
        <h1 className="max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl">
          Computer Science student building across networks, software and sound.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-dim">
          I study at the University of Ibadan with a focus on networking and cybersecurity,
          and I am currently on an industrial placement at Airtel.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 text-sm">
          <a href="#projects" className="border border-paper px-5 py-3 hover:bg-paper hover:text-ink">
            See projects
          </a>
          <a href="#contact" className="border border-line px-5 py-3 hover:border-paper">
            Get in touch
          </a>
        </div>
      </section>

      <Section id="technology" title="Technology">
        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {techAreas.map((a) => (
            <div key={a.name} className="border-t border-line pt-4">
              <dt className="font-display text-xl">{a.name}</dt>
              <dd className="mt-1 text-sm text-dim">{a.level}</dd>
              <dd className="mt-2">{a.detail}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="projects" title="Projects">
        <div className="space-y-10">
          {projects.filter((p) => p.featured).map((p) => (
            <article key={p.slug} className="border-t border-line pt-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl">{p.title}</h3>
                <span className="rounded-full border border-line px-3 py-0.5 text-sm text-dim">
                  {p.status}
                </span>
              </div>
              <p className="mt-3 max-w-2xl">{p.summary}</p>
              <p className="mt-3 text-sm text-dim">Built with {p.stack.join(", ")}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <ol className="space-y-10">
          {experience.map((e) => (
            <li key={e.org} className="border-t border-line pt-5">
              <p className="text-sm text-dim">
                {e.period}
                {e.current ? ", ongoing" : ""}
              </p>
              <h3 className="mt-1 font-display text-2xl">{e.org}</h3>
              <p className="text-dim">
                {e.role}
                {e.location ? `, ${e.location}` : ""}
              </p>
              <ul className="mt-3 max-w-2xl list-disc space-y-1 pl-5">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="creative" title="Creative studio">
        <p className="max-w-xl text-dim">
          Alongside technology I work in music and media. Samples of each will appear here.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {creativeAreas.map((c) => (
            <li
              key={c}
              className="flex aspect-[16/9] items-end border border-line bg-raised p-5 font-display text-xl"
            >
              {c}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" title="Contact">
        {contact.email || contact.linkedin || contact.github ? (
          <ul className="space-y-2">
            {contact.email && <li><a className="underline" href={`mailto:${contact.email}`}>{contact.email}</a></li>}
            {contact.linkedin && <li><a className="underline" href={contact.linkedin}>LinkedIn</a></li>}
            {contact.github && <li><a className="underline" href={contact.github}>GitHub</a></li>}
          </ul>
        ) : (
          <p className="text-dim">Contact details have not been added yet. Set them in src/content/site.ts.</p>
        )}
      </Section>
    </>
  );
}
