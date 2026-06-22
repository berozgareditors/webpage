import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FormatQuoteRounded } from "@mui/icons-material";
import { testimonials } from "../data/content.js";

function TestimonialCard({ index }) {
  const [front, setFront] = useState(testimonials[index % testimonials.length]);
  const [back, setBack] = useState(testimonials[(index + 1) % testimonials.length]);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 4000 + index * 500);
    return () => clearInterval(interval);
  }, [index]);

  const handleAnimationComplete = () => {
    if (flipped) {
      setFront(back);
      setBack(testimonials[Math.floor(Math.random() * testimonials.length)]);
    }
  };

  // This layout uses your original requested styling
  const TestimonialContent = ({ data }) => (
    <figure className="relative h-full flex flex-col p-8 bg-[#050505] border border-white/[0.1] rounded-[2rem] overflow-hidden">
      <FormatQuoteRounded className="text-[#FF3E20] mb-4" sx={{ fontSize: 32 }} />
      <blockquote className="relative z-10 flex-1 font-sans text-lg leading-snug text-white/90 font-light italic">
        &ldquo;{data.quote}&rdquo;
      </blockquote>
      <div className="mt-8 flex items-center gap-4 border-t border-white/[0.05] pt-6">
        <div className="h-10 w-10 rounded-full flex items-center justify-center font-bold text-[10px] text-white bg-white/5">
          {data.name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <p className="font-bold text-white text-xs">{data.name}</p>
          <p className="text-[9px] text-[#FF3E20] uppercase tracking-[0.2em] font-bold">{data.company}</p>
        </div>
      </div>
    </figure>
  );

  return (
    <div className="h-[400px] w-full [perspective:1000px]">
      <motion.div
        className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        onAnimationComplete={handleAnimationComplete}
      >
        {/* Front Face */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          {/* Border Glow included here */}
          <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#FF3E20] to-purple-600 rounded-[2rem] opacity-20 blur transition duration-500"></div>
          <TestimonialContent data={front} />
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#FF3E20] to-purple-600 rounded-[2rem] opacity-20 blur transition duration-500"></div>
          <TestimonialContent data={back} />
        </div>
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#020202] py-16 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FF3E20]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />

      <div className="container-x relative z-10">
        <div className="mb-12 text-center">
          <h2 className="font-display text-6xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-3 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Success <span className="text-[#FF3E20]">Stories</span>
          </h2>
          <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-semibold">Trusted by industry leaders</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((_, i) => (
            <TestimonialCard key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

