import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { GroupsRounded } from "@mui/icons-material";
import { SocialIcon } from "./icons.jsx";
import Reveal from "./Reveal.jsx";
import { aboutParagraph, socials, brand } from "../data/content.js";

export default function GetInTouch() {
  return (
    <section id="contact" className="relative bg-ink pb-20 pt-24 sm:pt-32">
      {/* blend down from the red Clients section */}
      <div className="absolute inset-x-0 top-0 -translate-y-full h-24 bg-gradient-to-b from-brand to-ink" />

      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                GET IN TOUCH
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-6 max-w-md text-base font-semibold leading-relaxed text-white/85 sm:text-lg">
                &ldquo;{aboutParagraph}&rdquo;
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  {socials.map((s) => (
                    <IconButton
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      sx={{
                        border: "1px solid #262626",
                        borderRadius: "14px",
                        width: 48,
                        height: 48,
                        transition: "all .2s ease",
                        "&:hover": { backgroundColor: "#E63721", borderColor: "#E63721" },
                      }}
                    >
                      <SocialIcon name={s.icon} size={20} />
                    </IconButton>
                  ))}
                </div>

                <Button
                  href={`mailto:${brand.email}`}
                  size="large"
                  variant="contained"
                  color="primary"
                >
                  Talk with us
                </Button>
              </div>
            </Reveal>
          </div>

          {/*
            The mockup shows a 3D illustration of the team here. Drop your
            artwork in /src/assets and replace this placeholder with an <img>.
          */}
          <Reveal delay={120}>
            <div className="grid aspect-[4/3] w-full place-items-center rounded-4xl border border-ink-line bg-gradient-to-br from-ink-soft to-black">
              <div className="flex flex-col items-center gap-3 text-white/40">
                <GroupsRounded sx={{ fontSize: 64 }} />
                <span className="font-condensed text-sm uppercase tracking-[0.25em]">
                  Your team illustration
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
