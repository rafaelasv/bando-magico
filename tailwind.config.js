/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

        fontFamily: {
        roboto: ['var(--font-roboto-slab)', 'serif'],
        chalk: ['var(--font-chalkiez)', 'sans-serif'],
      },

      colors: {
        'papel': '#F7F5EB',
        'amarelo-psita': '#F9E29C',
        'coral-bochecha': '#F09E86',
        'verde-natureza': '#A8C69F',
        'grafite-lapis': '#6B665F',
      },
    },
  },
  plugins: [],
};