import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "520px",
        sm: "768px",
        md: "1024px",
        lg: "1280px",
        xl: "1640px",
      },
    },
  },
  plugins: [],
};
export default config;
