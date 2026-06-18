import { brand, aboutParagraph, footer } from "../data/content.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-line bg-ink">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-extrabold tracking-tight text-white">
              {brand.full}
              <span className="text-brand">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              &ldquo;{aboutParagraph.slice(0, 150)}…&rdquo;
            </p>
          </div>

          {/* Quick links */}
          <div className="md:text-center">
            <h3 className="font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footer.quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:text-center">
            <h3 className="font-condensed text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Our services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footer.servicesList.map((s) => (
                <li key={s} className="text-sm text-white/70">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-ink-line pt-6 text-center">
          <p className="text-xs text-white/45">
            © {year} {brand.full}. {brand.tagline}.
          </p>
        </div>
      </div>
    </footer>
  );
}
