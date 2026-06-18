import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { MenuRounded, CloseRounded } from "@mui/icons-material";
import { brand, navLinks } from "../data/content.js";

function Logo() {
  return (
    <a href="#top" className="group flex flex-col leading-none">
      <span className="font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl">
        {brand.name}
        <span className="text-brand">.</span>
      </span>
      <span className="font-condensed text-[10px] uppercase tracking-[0.35em] text-white/55">
        {brand.tagline}
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <span id="top" />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #1f1f1f" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 80 } }}>
          <div className="container-x flex w-full items-center justify-between">
            <Logo />

            {/* Desktop links */}
            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-condensed text-sm uppercase tracking-wider text-white/75 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button
                href="#contact"
                variant="contained"
                color="primary"
                className="hidden sm:inline-flex"
              >
                Talk with us
              </Button>

              {/* Mobile menu trigger */}
              <IconButton
                onClick={() => setOpen(true)}
                edge="end"
                aria-label="Open menu"
                className="md:!hidden"
              >
                <MenuRounded />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { backgroundColor: "#0A0A0A", width: 280 } }}
      >
        <div className="flex items-center justify-between border-b border-ink-line px-5 py-4">
          <Logo />
          <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
            <CloseRounded />
          </IconButton>
        </div>
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-condensed text-base uppercase tracking-wider text-white/80 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <Button
            href="#contact"
            onClick={() => setOpen(false)}
            variant="contained"
            color="primary"
            fullWidth
            className="!mt-4"
          >
            Talk with us
          </Button>
        </nav>
      </Drawer>
    </>
  );
}
