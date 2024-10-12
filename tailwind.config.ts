import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: '#BFF816',
        success: '#36B208',
        red: '#FF0000'
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3200px',
        '6xl': '3840px',
        '7xl': '4480px',
        '8xl': '5120px'
      }
    },
  },
  plugins: [],
};
export default config;
