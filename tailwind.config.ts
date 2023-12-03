import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        sm: "500px",
        md: "800px",
        lg: "1100px",
        xl: "1500px",
      },
    },
  },
  plugins: [],
};
export default config;
