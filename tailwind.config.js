/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-with-noise":
          "linear-gradient(to bottom right, #33394c 0%, #4e5f7d 45%, #597996 55%, #5eaaa9 75%, #88bf91 100%), url(https://i.imgur.com/AdYy6OO.jpeg)",
      },
    },
  },
  plugins: [],
};
