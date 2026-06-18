import { DesignServicesRounded, MovieCreationRounded, CodeRounded } from "@mui/icons-material";
import Reveal from "./Reveal.jsx";
import { services } from "../data/content.js";

const ICONS = { DesignServicesRounded, MovieCreationRounded, CodeRounded };

function ServiceCard({ service, index }) {
  const Icon = ICONS[service.icon] || MovieCreationRounded;
  const featured = service.featured;
  return (
    <Reveal
      delay={index * 120}
      className={[
        "group relative flex flex-col items-center rounded-4xl border bg-brick px-6 pb-7 pt-10 text-center transition-transform duration-300",
        featured
          ? "border-white/30 shadow-2xl shadow-black/40 lg:-translate-y-6 lg:scale-[1.04]"
          : "border-white/5",
        "hover:-translate-y-2",
      ].join(" ")}
    >
      {/*
        The mockup shows a 3D character here. To use one, replace this icon
        block with: <img src="/characters/video.png" alt="" className="h-56 object-contain" />
      */}
      <div className="flex h-44 w-full items-center justify-center sm:h-52">
        <Icon sx={{ fontSize: featured ? 96 : 80, color: "rgba(255,255,255,0.92)" }} />
      </div>

      <div className="mt-2 w-full rounded-2xl bg-black/25 px-4 py-3 backdrop-blur-sm">
        <h3 className="font-display text-lg font-bold text-white sm:text-xl">{service.title}</h3>
      </div>
      <p className="mt-3 max-w-[18rem] text-sm text-white/70">{service.blurb}</p>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-ink py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <h2 className="text-center font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Services we provide
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:items-center">
          {services.map((s, i) => (
            <ServiceCard key={s.key} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
