import Reveal from "./Reveal.jsx";
import { aboutParagraph } from "../data/content.js";
import Button from "@mui/material/Button";


export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="bg-[linear-gradient(0deg,rgba(10,10,10,1)_0%,rgba(196,39,18,1)_50%,rgba(10,10,10,1)_100%)] min-h-[500px] px-[5vw] py-[5vw] lg:flex lg:justify-center">
      <div className="lg:w-[45%]">
        <p className="text-4xl lg:text-7xl md:text-5xl font-bold">
          Who We Are
        </p>
        <p className=" text-xl py-5">We are a full-service digital agency passionate about helping businesses build a strong online presence. Through performance marketing, graphic design, video editing, and web development, we create impactful digital experiences that drive growth and deliver measurable results. Our mission is simple: to turn ideas into brands and brands into success stories.</p>
        <Button
            href="#contact"
            onClick={() => setOpen(false)}
            variant="contained"
            color="primary"
            fullWidth
            className="!mt-4 mb-4 w-[150px]"
          >
            Talk with us
          </Button>
      </div>
      <div className="lg:w-[50%]">
        <img src="https://www.adobe.com/in/creativecloud/video/discover/media_1a997e2b4aa0da1eb2856def0c07fdc684a595f86.png?width=750&format=png&optimize=medium" alt="" className="lg:w-[100%] lg:h-[400px] " />
      </div>
    </section>
  );
}
