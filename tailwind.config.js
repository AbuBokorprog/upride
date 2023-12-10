/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FD5444",

          secondary: "#00c0ff",

          accent: "#3900ff",

          neutral: "#01050a",

          "base-100": "#FFFFFF",

          info: "#0080d1",

          success: "#009f57",

          warning: "#f27d00",

          error: "#e80052",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

// plugins: [require("daisyui")],
//
