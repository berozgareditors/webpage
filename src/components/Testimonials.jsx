import Rating from "@mui/material/Rating";
import { FormatQuoteRounded } from "@mui/icons-material";
import Reveal from "./Reveal.jsx";
import { testimonials } from "../data/content.js";

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TestimonialCard({ t, index }) {
  return (
    <Reveal delay={index * 120}>
      <figure className="flex h-full flex-col rounded-3xl border border-ink-line bg-ink-soft p-7">
        <FormatQuoteRounded sx={{ fontSize: 40, color: "#E63721" }} />
        <figcaption className="mt-1 font-condensed text-sm font-semibold uppercase tracking-wide text-brand">
          {t.company}
        </figcaption>

        <Rating
          value={5}
          readOnly
          size="small"
          sx={{ mt: 1.5, "& .MuiRating-iconFilled": { color: "#E63721" } }}
        />

        <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/75">
          &ldquo;{t.quote}&rdquo;
        </blockquote>

        <div className="mt-6 flex items-center gap-3 border-t border-ink-line pt-5">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-brand/20 font-display text-sm font-bold text-brand">
            {initials(t.name)}
          </span>
          <div>
            <p className="font-condensed text-sm font-semibold uppercase tracking-wide text-white">
              {t.name}
            </p>
            <p className="text-xs text-brand-light">{t.role}</p>
          </div>
        </div>
      </figure>
    </Reveal>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <h2 className="mx-auto max-w-4xl text-center font-impact text-4xl uppercase leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            Trusted by creative agencies, brands &amp; storytellers.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
