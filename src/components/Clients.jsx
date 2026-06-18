import Reveal from "./Reveal.jsx";
import { clients } from "../data/content.js";

export default function Clients() {
  return (
    <section
      id="clients"
      className="relative bg-gradient-to-b from-ink via-brand-dark to-brand py-20 sm:py-28"
    >
      <div className="container-x">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Clients we worked with
          </h2>
        </Reveal>

        {/*
          These are placeholder name cards. Only show logos of clients you've
          actually worked with, and with their permission. Replace each card
          with an <img> of the official logo (SVG/PNG) from /src/assets.
        */}
        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {clients.map((c) => (
              <div
                key={c}
                className="grid h-20 min-w-[150px] flex-1 place-items-center rounded-2xl border border-white/15 bg-white/10 px-6 backdrop-blur-sm sm:min-w-[180px] sm:max-w-[220px]"
              >
                <span className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {c}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
