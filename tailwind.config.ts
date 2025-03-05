import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        principal:{
          light: '#9E61BD',
          DEFAULT: '#432354',
          dark: '#22122B',
        } ,
        secondary:{
          light: '#5E60D4',
          DEFAULT: '#151793',
          dark: '#0D0E59',
        } ,
      },
    },
  },
  plugins: [],
} satisfies Config;
