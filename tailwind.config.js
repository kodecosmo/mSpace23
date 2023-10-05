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
      colors: {
        primary: {"50":"#fff7ed","100":"#ffedd5","200":"#fdba74","300":"#fcd34d","400":"#fcd34d","500":"#f59e0b","600":"#fb923c","700":"#f97316","800":"#ea580c","900":"#c2410c","950":"#7c2d12"},
        'text-color': '#444444',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    }

  },
  plugins: [
    require("flowbite/plugin"),
  ],
}
