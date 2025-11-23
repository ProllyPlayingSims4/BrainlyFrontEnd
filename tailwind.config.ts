import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media", // or "media" for OS-based
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
