/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '-100': '-1',
      }
    }
  },
  daisyui: {
    themes: ["light", "dark", "cyberpunk"]
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

