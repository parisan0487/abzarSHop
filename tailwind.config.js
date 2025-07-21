/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--e-global-color-primary)',
        secondary: 'var(--e-global-color-secondary)',
        text: 'var(--e-global-color-text)',
        accent: 'var(--e-global-color-accent)',
        purpleDark: 'var(--e-global-color-c1a414c)',
        whiteCustom: 'var(--e-global-color-770d2d0)',
        darkGray: 'var(--e-global-color-eb32136)',
        darkPurple: 'var(--e-global-color-7021ffe)',
        background: 'var(--e-global-color-5dbaf57)',
        customBlack: 'var(--e-global-color-ff809e8)',
      },
      fontFamily: {
        kalameh: ['var(--font-kalameh)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
