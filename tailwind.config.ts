import type { Config } from "tailwindcss";
// https://coolors.co/palette/f72585-7209b7-3a0ca3-4361ee-4cc9f0
const config: Config = {
    darkMode: ["class"],
    content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: '#4361ee',
  			foreground: '#7209B7',
  			primary: {
  				DEFAULT: '#7209b7',
  				hover: '#f72585',
  			},
  			secondary: '#4cc9f0',
  			accent: '#4361ee',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
