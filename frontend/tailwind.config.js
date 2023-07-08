/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "4px": "0.25rem"
      },
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '65': '0.65',
       }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
};