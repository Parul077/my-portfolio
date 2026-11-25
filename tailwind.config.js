/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', "monospace"],
        display: ["Syne", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        obsidian: {
          950: "#07070f",
          900: "#0d0d1a",
          850: "#111222",
          800: "#16172e",
        },
      },
    },
  },
  plugins: [],
};
