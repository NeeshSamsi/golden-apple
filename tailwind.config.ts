import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: ["var(--font-ssonder)", ...defaultTheme.fontFamily.serif],
      sans: ["var(--font-schibsted)", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: "#22203A",
        accent: "#F1A832",
      },
    },
  },
  plugins: [],
}
export default config
