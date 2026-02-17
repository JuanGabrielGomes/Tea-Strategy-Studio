import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tea: {
          off: "#F4F1EC",
          brown: "#5B4636",
          brownSoft: "#8A7462",
          green: "#3F4A3C",
          greenSoft: "#6B7766",
          dark: "#111111",
        },
      },
    },
  },
  plugins: [],
};

export default config;
