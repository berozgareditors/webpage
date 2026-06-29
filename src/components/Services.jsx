import { useState, useRef, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { services } from "../data/content.js";

// ── Sound icons ───────────────────────────────────────────────────────────────
function IconSoundOn() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}
function IconSoundOff() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}
      strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

// ── Triple-tile to guarantee full carousel on both sides ──────────────────────
const COPIES = 3;
const tiledSlides = Array.from({ length: COPIES }, (_, copy) =>
  services.map((s, i) => ({ ...s, _uid: `${copy}-${i}`, _realIndex: i, _copy: copy }))
).flat();
const INITIAL_SLIDE = services.length * Math.floor(COPIES / 2);

// The CENTER copy index is the one that should play audio (avoids echo from all 3)
const CENTER_COPY = Math.floor(COPIES / 2); // = 1

export default function Services() {
  const [active, setActive]                 = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isMuted, setIsMuted]               = useState(true);
  const [isInView, setIsInView]             = useState(false);
  // Key = _uid ("copy-realIndex") — unique per tile, no collisions
  const videoRefs  = useRef({});
  const sectionRef = useRef(null);

  // ── Audio: only the CENTER copy of the active service plays unmuted ───────────
  // This kills the echo — previously all 3 copies tried to play audio simultaneously
  const applyAudio = useCallback((muted, inView) => {
    Object.entries(videoRefs.current).forEach(([uid, video]) => {
      if (!video) return;
      const [copyStr, realStr] = uid.split("-");
      const copy      = parseInt(copyStr, 10);
      const realIndex = parseInt(realStr,  10);
      const isCenter  = copy === CENTER_COPY;
      const isActive  = realIndex === active;

      if (inView) {
        // Only the center copy of the active service gets audio
        video.muted = muted || !isActive || !isCenter;
        video.play().catch(() => {});
      } else {
        video.muted = true;
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [active]);

  useEffect(() => { applyAudio(isMuted, isInView); }, [isMuted, isInView, active, applyAudio]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => setIsInView(e.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const fn = () =>
      applyAudio(document.visibilityState === "hidden" ? true : isMuted, isInView);
    document.addEventListener("visibilitychange", fn);
    return () => document.removeEventListener("visibilitychange", fn);
  }, [isMuted, isInView, applyAudio]);

  const toggleMute = () => setIsMuted(p => !p);
  const goPrev = () => swiperInstance?.slidePrev();
  const goNext = () => swiperInstance?.slideNext();

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #120004 0%, #1c0006 20%, #0e0002 40%, #1a0200 60%, #120004 80%, #0a0001 100%)",
      }}
    >
      {/* ── Decorative blobs — glassmorphism atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-left: deep violet */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #c0001a 0%, transparent 70%)", filter: "blur(80px)" }} />
        {/* Top-right: electric blue */}
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, #FF3E20 0%, transparent 70%)", filter: "blur(70px)" }} />
        {/* Center: brand red glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-15"
          style={{ background: "radial-gradient(ellipse, #ff1a00 0%, transparent 70%)", filter: "blur(90px)" }} />
        {/* Bottom-left: teal */}
        <div className="absolute -bottom-20 left-1/4 w-[350px] h-[350px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #8b0000 0%, transparent 70%)", filter: "blur(60px)" }} />
        {/* Bottom-right: magenta */}
        <div className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #cc1500 0%, transparent 70%)", filter: "blur(75px)" }} />
        {/* Glass noise overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
        {/* Top shimmer line */}
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,62,32,0.7), rgba(220,20,0,0.5), transparent)" }} />
        {/* Bottom shimmer line */}
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(180,0,0,0.5), rgba(255,62,32,0.4), transparent)" }} />
      </div>

      {/* ── Title + audio toggle ── */}
      <div className="container-x mb-16 text-center relative z-10">

        {/* Colourful gradient heading */}
        <h2
          className="font-display text-5xl md:text-7xl font-black text-white"
          style={{ filter: "drop-shadow(0 0 20px rgba(255,62,32,0.3))" }}
        >
          Services we provide
        </h2>

        {/* Rainbow underline */}
        <div className="mx-auto mt-5 h-1 w-24 rounded-full"
          style={{ background: "linear-gradient(90deg, #ff6b35, #FF3E20, #cc0000)" }} />

        {/* Audio toggle pill */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute" : "Mute"}
          className={`
            absolute right-0 top-1/2 -translate-y-1/2
            flex items-center gap-2 px-4 py-2 rounded-full
            border text-xs font-semibold tracking-wide transition-all duration-200
            backdrop-blur-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF3E20]
            ${isMuted
              ? "bg-white/5 border-white/10 text-white/50 hover:text-white hover:border-white/25 hover:bg-white/10"
              : "bg-[#FF3E20]/15 border-[#FF3E20]/50 text-[#FF3E20] hover:bg-[#FF3E20]/25"
            }
          `}
        >
          {isMuted ? <IconSoundOff /> : <IconSoundOn />}
          <span className="hidden sm:inline">{isMuted ? "Muted" : "Sound On"}</span>
        </button>
      </div>

      {/* ── Carousel ── */}
      <div className="relative max-w-7xl mx-auto px-4 z-10">

        {/* Prev arrow */}
        <button onClick={goPrev} aria-label="Previous service"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -translate-x-1 md:-translate-x-5
            w-10 h-10 flex items-center justify-center rounded-full
            border border-white/15 text-white transition-all duration-200
            backdrop-blur-md hover:border-[#FF3E20] hover:text-[#FF3E20]"
          style={{ background: "rgba(255,255,255,0.05)" }}>
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Next arrow */}
        <button onClick={goNext} aria-label="Next service"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 translate-x-1 md:translate-x-5
            w-10 h-10 flex items-center justify-center rounded-full
            border border-white/15 text-white transition-all duration-200
            backdrop-blur-md hover:border-[#FF3E20] hover:text-[#FF3E20]"
          style={{ background: "rgba(255,255,255,0.05)" }}>
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Track with matching edge fades */}
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #120004, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #0a0001, transparent)" }} />

          <Swiper
            onSwiper={setSwiperInstance}
            modules={[EffectCoverflow, Autoplay]}
            initialSlide={INITIAL_SLIDE}
            onSlideChange={(sw) => setActive(sw.activeIndex % services.length)}
            effect="coverflow"
            centeredSlides={true}
            loop={false}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            slidesPerView="auto"
            spaceBetween={20}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
            className="!py-10"
          >
            {tiledSlides.map((s) => (
              <SwiperSlide key={s._uid} style={{ width: 320 }}>
                <ServiceCard
                  service={s}
                  isActive={s._realIndex === active}
                  isMuted={isMuted}
                  videoRef={(el) => {
                    if (el) videoRefs.current[s._uid] = el;
                    else delete videoRefs.current[s._uid];
                  }}
                  onToggleMute={toggleMute}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Dot pagination */}
        <DotPagination
          total={services.length}
          active={active}
          onDotClick={(i) => {
            if (!swiperInstance) return;
            const cur = swiperInstance.activeIndex;
            const nearest = tiledSlides
              .map((s, idx) => ({ idx, diff: Math.abs(idx - cur), ri: s._realIndex }))
              .filter(t => t.ri === i)
              .reduce((a, b) => (a.diff < b.diff ? a : b));
            swiperInstance.slideTo(nearest.idx);
          }}
        />
      </div>
    </section>
  );
}

// ── Service card — glassmorphism style ────────────────────────────────────────
function ServiceCard({ service: s, isActive, isMuted, videoRef, onToggleMute }) {
  return (
    <article
      className={`
        relative h-[480px] rounded-3xl p-6 border
        transition-all duration-500 flex flex-col
        ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-40"}
        hover:opacity-100
      `}
      style={isActive ? {
        background: "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
        border: "1px solid rgba(255,62,32,0.6)",
        boxShadow: "0 0 40px -8px rgba(255,62,32,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
        backdropFilter: "blur(20px)",
      } : {
        background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
        border: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Top gloss line on active card */}
      {isActive && (
        <div className="absolute top-0 left-6 right-6 h-px rounded-full"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)" }} />
      )}

      {/* ── Header ── */}
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-white font-bold text-sm tracking-tight">
          {s.name || "Berozgar Team"}
        </h4>
        <span
          className="text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded"
          style={{
            color: "#FF3E20",
            background: "rgba(255,62,32,0.12)",
            border: "1px solid rgba(255,62,32,0.2)",
          }}
        >
          {s.designation || "Specialist"}
        </span>
      </div>

      {/* ── Video area ── */}
      <div
        className="h-[220px] rounded-2xl flex items-center justify-center overflow-hidden relative"
        style={{
          background: "rgba(0,0,0,0.5)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <video
          ref={videoRef}
          src={s.character}
          loop
          playsInline
          muted
          className="w-full h-full object-contain"
        />

        {/* Mute toggle on active card only */}
        {isActive && (
          <button
            onClick={(e) => { e.stopPropagation(); onToggleMute(); }}
            aria-label={isMuted ? "Unmute" : "Mute"}
            className="absolute bottom-2 right-2 z-10 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
            style={isMuted ? {
              background: "rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.6)",
              backdropFilter: "blur(8px)",
            } : {
              background: "rgba(255,62,32,0.9)",
              border: "1px solid #FF3E20",
              color: "white",
            }}
          >
            {isMuted ? <IconSoundOff /> : <IconSoundOn />}
          </button>
        )}
      </div>

      {/* ── Content ── */}
      <div className="mt-6 flex-1 text-center">
        <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
        <p className="text-xs text-white/50 leading-relaxed line-clamp-2 px-2">{s.blurb}</p>
      </div>

      {/* ── CTA ── */}
      <a
        href={s.portfolioUrl || "#"}
        className="mt-4 py-2.5 w-full rounded-xl text-white text-center text-xs font-bold transition-all duration-200 hover:border-[#FF3E20]"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(8px)",
        }}
        onMouseEnter={e => e.currentTarget.style.background = "#FF3E20"}
        onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
        aria-label={`View portfolio for ${s.title}`}
      >
        View Portfolio
      </a>
    </article>
  );
}

// ── Dot pagination ─────────────────────────────────────────────────────────────
function DotPagination({ total, active, onDotClick }) {
  const MAX_DOTS = Math.min(total, 7);
  const half = Math.floor(MAX_DOTS / 2);
  let start = Math.max(0, active - half);
  const end = Math.min(total - 1, start + MAX_DOTS - 1);
  if (end - start < MAX_DOTS - 1) start = Math.max(0, end - MAX_DOTS + 1);
  const dots = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  return (
    <div className="flex items-center justify-center gap-2 mt-6" role="tablist" aria-label="Services navigation">
      {dots.map((dotIndex) => {
        const isActive = dotIndex === active;
        const isEdge = dots.length >= MAX_DOTS && (dotIndex === dots[0] || dotIndex === dots[dots.length - 1]);
        return (
          <button
            key={dotIndex}
            role="tab"
            aria-selected={isActive}
            aria-label={`Go to service ${dotIndex + 1}`}
            onClick={() => onDotClick(dotIndex)}
            className="rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF3E20]"
            style={isActive
              ? { width: 24, height: 8, background: "linear-gradient(90deg, #a78bfa, #FF3E20)" }
              : { width: isEdge ? 6 : 8, height: isEdge ? 6 : 8, background: "rgba(255,255,255,0.25)" }
            }
          />
        );
      })}
    </div>
  );
}
