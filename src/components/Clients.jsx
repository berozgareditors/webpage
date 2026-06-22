import { motion } from "framer-motion";
import { clients } from "../data/content.js"; // Ensure this contains the objects mapped to your image paths
import Reveal from "./Reveal.jsx";

export default function Clients() {
  return (
    <section id="clients" className="relative bg-[#020202] py-32 overflow-hidden">
      {/* Premium Mesh Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-[#FF3E20]/20 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[150px]"
        />
      </div>

      <div className="container-x relative z-10">
        <Reveal>
          <div className="mb-24 text-center">
            <h2 className="text-white font-black text-7xl md:text-8xl uppercase tracking-tighter italic">
              Partners
            </h2>
            <p className="text-[#FF3E20] uppercase tracking-[0.5em] font-semibold text-[10px] mt-4">
              Trusted by industry leaders
            </p>
          </div>
        </Reveal>

        {/* Logo Marquee */}
        <div className="relative flex overflow-hidden border-y border-white/5 py-12 backdrop-blur-sm bg-white/[0.01]">
          <motion.div
            className="flex gap-20 whitespace-nowrap items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          >
            {[...clients, ...clients].map((c, i) => (
              <div 
                key={i} 
                className="flex items-center justify-center h-24 min-w-[200px]"
              >
                <img 
                  src={c.logo} 
                  alt={c.name} 
                  className="h-20 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}