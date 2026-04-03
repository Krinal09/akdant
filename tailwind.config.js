/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#0B0D10",
        graphite: "#12161D",
        platinum: "#ECE8E1",
        stone: "#9C968C",
        accent: "#C9A96B",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(120deg, rgba(5,6,8,0.8) 5%, rgba(5,6,8,0.2) 55%, rgba(5,6,8,0.75) 100%)",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
