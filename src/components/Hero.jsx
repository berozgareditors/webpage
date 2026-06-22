import Button from "@mui/material/Button";
import { ArrowForwardRounded, PlayArrowRounded } from "@mui/icons-material";
import { brand } from "../data/content.js";
import heroVideo from "../../public/Videos/heroone.mov"

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-ink" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_75%_0%,rgba(230,55,33,0.55),transparent_60%),radial-gradient(50%_50%_at_15%_100%,rgba(196,39,18,0.25),transparent_60%)]" />
      <div className="container-x flex min-h-[88vh] flex-col justify-center p-0 w-[100%]">
        <video src={heroVideo} autoPlay muted className="w-[100%] absolute left-0"></video>
        <div className="min-h-[70vh] w-12 absolute left-0 [writing-mode:vertical-rl] flex items-center justify-center cursor-pointer transition-transform duration-500 hover:scale-[0.98] origin-left bg-white/10 backdrop-blur-lg border-r border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
          <p className="text-xl font-bold whitespace-nowrap rotate-180">DOWNLOAD BROCHURE</p>
        </div>
        <div className="min-h-[70vh] w-12  absolute right-0 [writing-mode:vertical-rl] flex items-center justify-center cursor-pointer transition-transform duration-500 hover:scale-[0.98] origin-left bg-white/10 backdrop-blur-lg border-r border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
          <p className="text-xl font-bold whitespace-nowrap rotate-180">DOWNLOAD BROCHURE</p>
        </div>
      </div>


      {/* fade into the black Services section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ink" />
    </section>
  );
}