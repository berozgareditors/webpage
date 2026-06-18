import Reveal from "./Reveal.jsx";
import { aboutParagraph } from "../data/content.js";

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="relative bg-gradient-to-b from-ink via-brand-dark to-brand py-20 sm:py-28"
    >
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-6xl font-extrabold leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
              WHO
              <br />
              WE
              <br />
              ARE
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-lg font-semibold leading-relaxed text-white sm:text-xl">
              &ldquo;{aboutParagraph}&rdquo;
            </p>
          </Reveal>
        </div>

        {/*
          Replace this with a photo of your edit suite / timeline.
          Drop a file in /src/assets and: import shot from "../assets/edit-timeline.jpg"
          then use <img src={shot} ... />
        */}
        <Reveal delay={160} className="mt-14">
          <div className="overflow-hidden rounded-4xl border border-white/15 shadow-2xl shadow-black/40">
            <img
              src="https://picsum.photos/seed/berozgar-timeline/1400/560"
              alt="A video editing timeline in progress"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
