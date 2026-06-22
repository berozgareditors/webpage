import { MovieFilterRounded, GroupsRounded, ArrowForwardRounded } from "@mui/icons-material";
import Button from "@mui/material/Button";
import Reveal from "./Reveal.jsx";
import { features, brand } from "../data/content.js";

const ICONS = { MovieFilterRounded, GroupsRounded };

function FeatureCard({ feature, index }) {
  const Icon = ICONS[feature.icon] || MovieFilterRounded;
  return (
    <Reveal delay={index * 120}>
      <div className="group h-full rounded-3xl border border-ink-line bg-ink-soft p-7 transition-colors hover:border-brand/50">
        <div className="flex items-start justify-between">
          <span className="font-impact text-3xl text-white/10">0{index + 1}</span>
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/15 text-brand">
            <Icon />
          </span>
        </div>
        <h3 className="mt-5 font-condensed text-xl font-semibold uppercase tracking-wide text-white">
          {feature.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/65">{feature.body}</p>
        <a
          href="#contact"
          className="mt-5 inline-flex items-center gap-1.5 font-condensed text-xs uppercase tracking-[0.2em] text-brand transition-colors hover:text-brand-light"
        >
          Learn more
          <ArrowForwardRounded sx={{ fontSize: 16 }} />
        </a>
      </div>
    </Reveal>
  );
}

export default function WhyTrust() {
  // Split features into pairs so we can align them perfectly row-by-row
  const row1LeftFeatures = features.slice(0, 2);
  const row2LeftFeatures = features.slice(2, 4);
  const row2RightFeatures = features.slice(4); // 5th, 6th, etc.

  return (
    <section id="why-us" className="bg-ink py-20 sm:py-28">
      <div className="container-x">
        {/* Master Grid */}
        <div className="grid grid-cols-1 items-start gap-y-6 lg:grid-cols-2 lg:gap-x-10">
          
          {/* Top Left: Cards 1 & 2 */}
          {/* order-2 on mobile, lg:order-1 on desktop */}
          <div className="order-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:order-1">
            {row1LeftFeatures.map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i} />
            ))}
          </div>

          {/* Top Right: Headline + CTA */}
          {/* order-1 on mobile (makes it top), lg:order-2 on desktop (puts it top right) */}
          <div className="order-1 flex flex-col justify-center lg:order-2 lg:pl-6">
            <Reveal delay={160}>
              <h2 className="font-impact text-5xl uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Why brands trust {brand.full}
              </h2>
              <p className="mt-6 max-w-md text-base text-white/70">
                From raw footage to final cut, we craft powerful visual experiences.
                Let your story shine with industry-grade editing and post-production.
              </p>
              <Button
                href="#contact"
                size="large"
                variant="contained"
                color="primary"
                endIcon={<ArrowForwardRounded />}
                className="!mt-8"
              >
                Let&rsquo;s create together
              </Button>
            </Reveal>
          </div>

          {/* Bottom Left: Cards 3 & 4 */}
          {/* order-3 on both mobile and desktop */}
          <div className="order-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:order-3">
            {row2LeftFeatures.map((f, i) => (
              <FeatureCard key={f.title} feature={f} index={i + 2} />
            ))}
          </div>

          {/* Bottom Right: Cards 5 & 6 */}
          {/* order-4 on both mobile and desktop */}
          {row2RightFeatures.length > 0 && (
            <div className="order-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:order-4 lg:pl-6">
              {row2RightFeatures.map((f, i) => (
                <FeatureCard key={f.title} feature={f} index={i + 4} />
              ))}
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
}