import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',    
        'xl': '1280px',
        '2xl': '1536px',
        'max-sm': {'max': '640px'},
        'max-xl': {'max': '1024px'},
        'max-lg': {'max': '1490px'}, 
        // 'small': {'max': '375px'}, 
        // 'average': {'max': '414px'},
      },
      colors: {
        "custom-blue": "#150050",
        "custom-grey": "#404040",
        "custom-black": "#000000",
        "custom-yellow": "#FFE377",
        "custom-grey2": "#787878",
      }
    },
  },
  plugins: [],
};

export default config;
