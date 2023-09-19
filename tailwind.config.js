/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors :{
        primary: "#FC8718",
        text-color: "#444444"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {"50":"orange-50","100":"orange-100","200":"orange-200","300":"orange-300","400":"orange-400","500":"orange-500","600":"orange-600","700":"orange-700","800":"orange-800","900":"orange-900","950":"orange-950"}
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
}
