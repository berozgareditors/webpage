// ─────────────────────────────────────────────────────────────
// All editable site copy lives here. Change text, links and lists
// in this one file — components read from it.
// ─────────────────────────────────────────────────────────────

export const brand = {
  name: "Berozgar",
  full: "Berozgar Editor",
  tagline: "Editing Your Story",
  email: "hello@berozgar.studio", // ← change to your real email
};

export const aboutParagraph =
  "We are a team of passionate professionals dedicated to building innovative solutions that empower our clients. Founded in 2026, our mission is to deliver exceptional value, drive growth, and foster long-term partnerships. We believe in creativity, integrity, and the power of technology.";

export const navLinks = [
  { label: "About", href: "#who-we-are" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#works" },
  { label: "Why us", href: "#why-us" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

// icon names map to @mui/icons-material components inside Services.jsx
export const services = [
  {
    key: "graphic",
    title: "Graphic designing",
    icon: "DesignServicesRounded",
    blurb: "Logos, brand kits & social creative that make you unmistakable.",
  },
  {
    key: "video",
    title: "Video editing",
    icon: "MovieCreationRounded",
    blurb: "Cinematic cuts, color grading and pacing that hold attention.",
    featured: true,
  },
  {
    key: "web",
    title: "Web development",
    icon: "CodeRounded",
    blurb: "Fast, responsive sites that turn visitors into customers.",
  },
];

// Portfolio thumbnails. Swap `image` with files in /src/assets when ready.
export const works = [
  { title: "Brand identity system", category: "Graphic Design", seed: "berozgar-1", span: "lg" },
  { title: "Launch flyer set", category: "Social", seed: "berozgar-2", span: "sm" },
  { title: "Portrait flyer mockup", category: "Print", seed: "berozgar-3", span: "sm" },
  { title: "Product reel", category: "Video Editing", seed: "berozgar-4", span: "sm" },
  { title: "Motion title pack", category: "Motion Graphics", seed: "berozgar-5", span: "sm" },
  { title: "Founder UGC ad", category: "UGC Video", seed: "berozgar-6", span: "lg" },
];

export const features = [
  {
    title: "Cinematic editing quality",
    icon: "MovieFilterRounded",
    body: "Professional video editing with cinema-grade color grading, seamless cuts, and compelling visual storytelling that engages audiences.",
  },
  {
    title: "Expert creative team",
    icon: "GroupsRounded",
    body: "A passionate team of directors, editors and cinematographers who treat every frame of your story like it matters.",
  },
];

export const testimonials = [
  {
    company: "Marko — Digital Marketing Agency",
    quote:
      "Working with Berozgar Editor was a seamless process start to finish, delivering exceptional visuals that exceeded our creative expectations perfectly.",
    name: "Alex Morgan",
    role: "Marko Agency",
  },
  {
    company: "Novax — Startup Accelerator",
    quote:
      "Berozgar Editor turned our raw footage into a visually engaging production that met our vision and added layers of depth, story and clarity.",
    name: "Chloe Ramirez",
    role: "Novax Media",
  },
  {
    company: "Velocity — Sports Brand",
    quote:
      "Impressed by their dedication and storytelling. Berozgar Editor crafted visuals that matched our goals and resonated strongly with our audience.",
    name: "Ethan Brooks",
    role: "Velocity Creative",
  },
];

// Replace with logos of *actual* clients (with their permission).
export const clients = ["Google", "Zomato", "Zerodha", "Swiggy", "Razorpay"];

export const socials = [
  { label: "X", href: "https://x.com", icon: "x" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
];

export const footer = {
  quickLinks: [
    { label: "About", href: "#who-we-are" },
    { label: "Why to choose us", href: "#why-us" },
    { label: "Clients", href: "#clients" },
    { label: "Portfolio", href: "#works" },
  ],
  servicesList: [
    "Web development",
    "Graphic designer",
    "Video Editing",
    "Motion graphics",
    "UGC Video",
  ],
};
