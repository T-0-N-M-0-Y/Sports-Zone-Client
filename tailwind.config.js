/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#bf7301",

          "secondary": "#ffe9c4",

          "accent": "#6ddb9d",

          "neutral": "#1e2d38",

          "base-100": "#dce8ef",

          "info": "#9db3f6",

          "success": "#25a281",

          "warning": "#ddb413",

          "error": "#e73c58",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
}

