import { useState, useRef, useEffect } from "react";
import { VolumeUpRounded, VolumeOffRounded } from "@mui/icons-material";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="relative isolate overflow-hidden min-h-screen">
      {/* Background Video with increased brightness */}
      <video
        ref={videoRef}
        src="/characters/hersec.mp4" 
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 -z-30 w-full h-full object-cover brightness-150"
      />

      {/* Dark Overlay for readability */}
      {/* <div className="absolute inset-0 -z-20 bg-black/60" /> */}

      {/* Mute/Unmute Control */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-10 right-20 z-10 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-[#FF3E20] transition-colors"
      >
        {isMuted ? <VolumeOffRounded /> : <VolumeUpRounded />}
      </button>

      {/* UI Elements */}
      <div className="container-x flex min-h-[88vh] flex-col justify-center pb-20 pt-32">
        {/* Left Brochure Button */}
        <div className="min-h-[70vh] w-12 absolute left-0 [writing-mode:vertical-rl] flex items-center justify-center cursor-pointer transition-transform duration-500 hover:scale-[0.98] origin-left bg-white/10 backdrop-blur-lg border-r border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
          <p className="text-xl font-bold whitespace-nowrap rotate-180 text-white">DOWNLOAD BROCHURE</p>
        </div>
        
        {/* Right Brochure Button */}
        <div className="min-h-[70vh] w-12 absolute right-0 [writing-mode:vertical-rl] flex items-center justify-center cursor-pointer transition-transform duration-500 hover:scale-[0.98] origin-left bg-white/10 backdrop-blur-lg border-l border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
          <p className="text-xl font-bold whitespace-nowrap rotate-180 text-white">DOWNLOAD BROCHURE</p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ink" />
    </section>
  );
}