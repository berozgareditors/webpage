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
    key: "design",
    name: "Ansh",
    designation: "Full-Stack Dev",
    title: "Graphic designing",
    blurb: "Logos, brand kits & social creative that make you unmistakable.",
    // Assigning one of your videos from image_e7626c.png
    character: "/characters/ansh.mp4", 
    shots: ["/work/design-1.jpg", "/work/design-2.jpg"]
  },
  {
    key: "video",
    title: "Video editing",
    blurb: "Cinematic cuts, color grading and pacing that hold attention.",
    // Assigning another video
    character: "/characters/berozgar.mp4", 
    shots: ["/work/video-1.jpg", "/work/video-2.jpg"]
  },
  {
    key: "video",
    title: "Video editing",
    blurb: "Cinematic cuts, color grading and pacing that hold attention.",
    character: "/characters/hello-sharqua.mp4", 
    shots: ["/work/video-1.jpg", "/work/video-2.jpg"]
  },

  {
    key: "design",
    title: "Graphic designing",
    blurb: "Logos, brand kits & social creative that make you unmistakable.",
    character: "/characters/hello-me.mp4", 
    shots: ["/work/design-1.jpg", "/work/design-2.jpg"]
  },
  // ADD NEW SERVICES BELOW:
  {
    key: "seo",
    title: "SEO Optimization",
    blurb: "Rank higher on search engines and get found by your ideal clients.",
    character: "/characters/hello-sharqua.mp4", // Ensure this file exists in /public/characters/
    shots: ["/work/seo-1.jpg", "/work/seo-2.jpg"]
  },
  {
    key: "marketing",
    title: "Digital Marketing",
    blurb: "Strategic campaigns that convert followers into loyal customers.",
    character: "/characters/marketing.mp4",
    shots: ["/work/market-1.jpg", "/work/market-2.jpg"]
  },
  {
    key: "design",
    title: "Graphic designing",
    blurb: "Logos, brand kits & social creative that make you unmistakable.",
    character: "/characters/ansh.mp4",
    // Always provide 2 shots, or a placeholder if missing
    shots: ["/work/design-1.jpg", "/work/design-2.jpg"] 
  },
  {
    key: "design",
    title: "Graphic designing",
    blurb: "Logos, brand kits & social creative that make you unmistakable.",
    character: "/characters/coffee-shaqua.mp4",
    // Always provide 2 shots, or a placeholder if missing
    shots: ["/work/design-1.jpg", "/work/design-2.jpg"] 
  },
  {
    key: "design",
    title: "Graphic designing",
    blurb: "Logos, brand kits & social creative that make you unmistakable.",
    character: "/characters/hello-me.mp4",
    // Always provide 2 shots, or a placeholder if missing
    shots: ["/work/design-1.jpg", "/work/design-2.jpg"] 
  },
  {
    key: "design",
    title: "Graphic designing",
    blurb: "Logos, brand kits & social creative that make you unmistakable.",
    character: "/characters/ansh.mp4",
    // Always provide 2 shots, or a placeholder if missing
    shots: ["/work/design-1.jpg", "/work/design-2.jpg"] 
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
  {
    title: "Expert Video team",
    icon: "GroupsRounded",
    body: "A passionate team of directors, editors and cinematographers who treat every frame of your story like it matters.",
  },
  {
    title: "Expert Video team",
    icon: "GroupsRounded",
    body: "A passionate team of directors, editors and cinematographers who treat every frame of your story like it matters.",
  },
  {
    title: "Expert Video team",
    icon: "GroupsRounded",
    body: "A passionate team of directors, editors and cinematographers who treat every frame of your story like it matters.",
  },
  {
    title: "Expert Video team",
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
export const clients = [
  { name: "Drink Rentro", logo: "/characters/drinkrentro.png" },
  { name: "GK Interior", logo: "/characters/gkinterior.png" },
  { name: "Neem Force", logo: "/characters/neemforcewoodencombo.png" },
  { name: "Sai Ram Interior", logo: "/characters/sairaminterior.png" },
  { name: "Saree Mandir", logo: "/characters/sareemandir.png" }
];

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




