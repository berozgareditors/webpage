import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { services } from "../data/content.js";

export default function Services() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef({});
  const sectionRef = useRef(null);

  const handleAudio = (play) => {
    Object.values(videoRefs.current).forEach((video, index) => {
      if (!video) return;
      if (play && index === active) {
        video.muted = false;
        video.play().catch(() => {});
      } else {
        video.muted = true;
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => handleAudio(entry.isIntersecting), { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    const handleVisibility = () => handleAudio(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [active]);

  return (
    <section ref={sectionRef} className="relative bg-[#050505] py-20">
      {/* 3D Attractive Title */}
      <div className="container-x mb-16 text-center">
        <h2 className="font-display text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 drop-shadow-[0_4px_0_rgba(0,0,0,0.5)]">
          Services we provide
        </h2>
        <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#FF3E20]" />
      </div>

      {/* Wrapper to contain carousel and mask overflow at boundaries */}
      <div className="max-w-7xl mx-auto overflow-hidden px-4">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          onSlideChange={(sw) => setActive(sw.realIndex % services.length)}
          effect="coverflow"
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          slidesPerView="auto"
          spaceBetween={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          className="!py-10"
        >
          {services.map((s, i) => (
            <SwiperSlide key={s.key + i} style={{ width: 320 }}>
              <article className={`relative h-[480px] rounded-3xl p-6 border transition-all duration-500 flex flex-col ${
                i === active 
                  ? "bg-[#111] border-[#FF3E20] shadow-[0_0_30px_-5px_rgba(255,62,32,0.3)] scale-100" 
                  : "bg-[#0a0a0a] border-white/5 opacity-40 scale-90"
              }`}>
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-white font-bold text-sm tracking-tight">{s.name || "Berozgar Team"}</h4>
                  <span className="text-[9px] text-[#FF3E20] uppercase font-bold tracking-widest bg-[#FF3E20]/10 px-2 py-0.5 rounded">
                    {s.designation || "Specialist"}
                  </span>
                </div>

                {/* Video Area */}
                <div className="h-[220px] bg-black rounded-2xl flex items-center justify-center border border-white/5 overflow-hidden">
                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    src={s.character}
                    loop playsInline
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="mt-6 flex-1 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed line-clamp-2 px-2">{s.blurb}</p>
                </div>

                {/* CTA */}
                <a href={s.portfolioUrl || "#"} className="mt-4 py-2.5 w-full rounded-xl bg-white/5 border border-white/10 text-white text-center text-xs font-bold hover:bg-[#FF3E20] transition-colors">
                  View Portfolio
                </a>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
