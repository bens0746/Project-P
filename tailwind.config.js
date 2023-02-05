/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      fontEn: ["OldStandardTT-Regular", "sans-serif"],
      fontTh: ["Krub-Bold", "sans-serif"],
      fontEn2: ["Prompt-Thin", "sans-serif"],
      fontEn4: ["Plasma09", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "940px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "primary": "#c9d646",
        "secondary": "#4D7C0F",
        "tertiary": "#ffffff",
      },
    },
  },
  plugins: [],
};
