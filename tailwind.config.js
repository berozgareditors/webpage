/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Berozgar brand palette
        brand: {
          DEFAULT: "#E63721", // primary red
          light: "#FF4A2E",
          dark: "#C42712", // hover / pressed
        },
        brick: "#7E2317", // service-card maroon
        ink: {
          DEFAULT: "#0A0A0A", // page background
          soft: "#161616", // cards on black
          line: "#262626", // hairline borders
        },
      },
      fontFamily: {
        // Body + rounded display headings
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        // Heavy condensed impact headings
        impact: ["Anton", "Impact", "sans-serif"],
        // Condensed uppercase labels / eyebrows
        condensed: ["Oswald", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        blob: "2rem 2rem 8rem 2rem",
      },
      maxWidth: {
        content: "80rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};
