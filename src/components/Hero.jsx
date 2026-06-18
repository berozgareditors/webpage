import Button from "@mui/material/Button";
import { ArrowForwardRounded, PlayArrowRounded } from "@mui/icons-material";
import { brand } from "../data/content.js";

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      {/*
        BACKGROUND
        Want a video/poster behind the text? Drop it in here, e.g.:
        <video className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
               src="/your-reel.mp4" autoPlay muted loop playsInline />
        The gradients below already sit on top to keep text readable.
      */}
      <div className="absolute inset-0 -z-20 bg-ink" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_75%_0%,rgba(230,55,33,0.55),transparent_60%),radial-gradient(50%_50%_at_15%_100%,rgba(196,39,18,0.25),transparent_60%)]" />
      {/* subtle film grain */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="container-x flex min-h-[88vh] flex-col justify-center pb-20 pt-32 sm:pt-40">
        <p className="animate-fade-up font-condensed text-sm uppercase tracking-[0.4em] text-brand">
          {brand.tagline}
        </p>

        <h1
          className="mt-6 max-w-4xl animate-fade-up font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          We turn raw footage into{" "}
          <span className="text-brand">stories that move.</span>
        </h1>

        <p
          className="mt-6 max-w-xl animate-fade-up text-base text-white/70 sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          {brand.full} is a creative studio for video editing, graphic design,
          motion graphics and web — built to make your brand impossible to scroll past.
        </p>

        <div
          className="mt-10 flex animate-fade-up flex-wrap items-center gap-4"
          style={{ animationDelay: "240ms" }}
        >
          <Button
            href="#works"
            size="large"
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardRounded />}
          >
            See our work
          </Button>
          <Button
            href="#contact"
            size="large"
            variant="outlined"
            startIcon={<PlayArrowRounded />}
            sx={{
              color: "#fff",
              borderColor: "rgba(255,255,255,0.3)",
              "&:hover": { borderColor: "#fff", backgroundColor: "rgba(255,255,255,0.06)" },
            }}
          >
            Start a project
          </Button>
        </div>

        {/* film-strip accent */}
        <div className="mt-16 flex animate-fade-up gap-2 opacity-70" style={{ animationDelay: "320ms" }}>
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="h-7 w-4 rounded-[3px] border border-white/15 bg-white/[0.04]"
            />
          ))}
        </div>
      </div>

      {/* fade into the black Services section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ink" />
    </section>
  );
}
