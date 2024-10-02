import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/views/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          pink: "#9d0050",
          darker: "#5a002e",
          dark: "#7c003f",
          light: "#c00062",
          lighter: "#e20074",
        },
        secondary: {
          darker: "#016f61",
          dark: "#02b19c",
          green: "#00ddc2",
          light: "#33e4ce",
          lighter: "#80eee1"
        },
        inactive: "#717171"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        input: '0px 1px 2px 0px rgba(0,0,0,0.12)'
      }
    },
  },
  plugins: [],
};
export default config;
