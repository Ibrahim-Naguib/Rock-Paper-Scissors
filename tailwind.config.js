/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkText: "hsl(229, 25%, 31%)",
        blueText: "hsl(229, 64%, 46%)",
        outline: "hsl(217, 16%, 45%)",
      },
    },
  },
  plugins: [],
};
