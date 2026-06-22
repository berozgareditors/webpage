import Reveal from "./Reveal.jsx";
import { aboutParagraph } from "../data/content.js";

export default function HelloSection() {
  return (
    <section className="bg-ink ">
      <div className="container-x">
        <Reveal>
          <div className="relative">
            {/* Overlapping heading: "Hello" over the photo, "guys" over the red panel.
                On mobile both stack over the photo, so keep both readable. */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 font-display text-center">
              <span className="text-white text-5xl font-extrabold tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-7xl lg:drop-shadow-none">Hello Guys</span>{" "}
              {/* <span className="text-white lg:text-black">guys</span> */}
            <p className="py-3">{aboutParagraph}</p>
            </div>

            <div className="h-[]">
              {/* Replace with your own studio/founder photo from /src/assets */}
              <div className="relative">
                <img
                  src="https://sorozatwiki.hu/wp-content/uploads/2021/10/netflix_2021.jpg"
                  alt="An editor at work by a window at golden hour"
                  className="h-64 w-full object-cover sm:h-80 lg:h-full opacity-30 rounded-[50px_0_50px_0]"
                  loading="lazy"
                />
                {/* top darkening so the white heading always reads */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-transparent" />
              </div>

              {/* <div className="bg-brand px-7 py-10 sm:px-10 lg:rounded-br-[7rem]">
                <div className="lg:pt-16">
                  <p className="max-w-md text-base font-semibold leading-relaxed text-white sm:text-lg">
                    &ldquo;{aboutParagraph}&rdquo;
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
