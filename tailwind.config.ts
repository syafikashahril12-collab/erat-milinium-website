import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — pulled straight from the ERAT logo
        rig: "#FA750F",      // rig-flame orange — accents, CTAs
        harbor: "#1C1A18",   // near-black — primary text, deep panels
        midnight: "#0B0A3D", // deep navy — header/footer, night-sea sections
        steel: "#B3B3B5",    // grey — muted text, borders, dividers
        mist: "#F7F6F3",     // off-white — light section backgrounds
      },
      fontFamily: {
        display: ["var(--font-oswald)"],
        body: ["var(--font-inter)"],
      },
      backgroundImage: {
        horizon:
          "linear-gradient(180deg, #0B0A3D 0%, #3A2A3D 45%, #FA750F 100%)",
        "horizon-line":
          "linear-gradient(90deg, #FA750F 0%, #B3B3B5 50%, #0B0A3D 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
