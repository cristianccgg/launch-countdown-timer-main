/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // ### Primary
        "1-Grayish-blue": "hsl(237, 18%, 59%)",
        "2-Soft-red": "hsl(345, 95%, 68%)",

        // ### Neutral
        "3-White": "hsl(0, 0%, 100%)",
        "4-Dark-desaturated-blue": "hsl(236, 21%, 26%)",
        "5-Very-dark-blue": "hsl(235, 16%, 14%)",
        "6-Very-dark-mostly-black-blue": "hsl(234, 17%, 12%)",
      },
      fontFamily: {
        redHat: ["Red Hat Text", "sans-serif"],
      },
      backgroundImage: {
        hills: "url('/images/pattern-hills.svg')",
        "icon-facebook": "url('/images/icon-facebook.svg')",
        "icon-pinterest": "url('/images/icon-pinterest.svg')",
        "icon-instagram": "url('/images/icon-instagram.svg')",
      },
    },
  },
  plugins: [],
};
