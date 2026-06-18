import Reveal from "./Reveal.jsx";
import { works } from "../data/content.js";

function WorkCard({ work, index }) {
  return (
    <Reveal delay={(index % 3) * 100}>
      <a
        href="#contact"
        className="group relative block overflow-hidden rounded-3xl border border-ink-line bg-ink-soft"
      >
        {/* Swap picsum for your real portfolio images in /src/assets */}
        <img
          src={`https://picsum.photos/seed/${work.seed}/720/560`}
          alt={work.title}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90" />
        <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 transition-transform duration-300 group-hover:translate-y-0">
          <span className="font-condensed text-xs uppercase tracking-[0.25em] text-brand-light">
            {work.category}
          </span>
          <h3 className="font-display text-lg font-bold text-white">{work.title}</h3>
        </div>
      </a>
    </Reveal>
  );
}

export default function OurWorks() {
  return (
    <section id="works" className="bg-ink py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Our Works
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
            <WorkCard key={w.seed} work={w} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
