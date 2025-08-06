/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"],

  theme: {
    extend: {
      boxShadow: {
        'black-40': '0px 4px 4px 0px #00000040',
        
      },
        backgroundImage: {
        'custom-gradient': "linear-gradient(90deg, #223D45 0%, rgba(6, 199, 82, 0.8) 100%)",
      },
    },
  },
  plugins: [],
}
