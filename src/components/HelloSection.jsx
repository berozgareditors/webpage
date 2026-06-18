import Reveal from "./Reveal.jsx";
import { aboutParagraph } from "../data/content.js";

export default function HelloSection() {
  return (
    <section className="bg-ink py-16 sm:py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative">
            {/* Overlapping heading: "Hello" over the photo, "guys" over the red panel.
                On mobile both stack over the photo, so keep both readable. */}
            <h2 className="absolute left-6 top-6 z-20 font-display text-5xl font-extrabold tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:left-10 sm:top-10 sm:text-6xl lg:text-7xl lg:drop-shadow-none">
              <span className="text-white">Hello</span>{" "}
              <span className="text-white lg:text-black">guys</span>
            </h2>

            <div className="grid overflow-hidden rounded-4xl lg:grid-cols-2">
              {/* Replace with your own studio/founder photo from /src/assets */}
              <div className="relative">
                <img
                  src="https://picsum.photos/seed/berozgar-editor-desk/900/760"
                  alt="An editor at work by a window at golden hour"
                  className="h-64 w-full object-cover sm:h-80 lg:h-full"
                  loading="lazy"
                />
                {/* top darkening so the white heading always reads */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-transparent" />
              </div>

              <div className="bg-brand px-7 py-10 sm:px-10 lg:rounded-br-[7rem]">
                <div className="lg:pt-16">
                  <p className="max-w-md text-base font-semibold leading-relaxed text-white sm:text-lg">
                    &ldquo;{aboutParagraph}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
