/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-red": "hsl(0, 100%, 67%)",
        "light-red-95": "hsl(0, 100%, 95%)",
        "orangey-yellow": "hsl(39, 100%, 56%)",
        "orangey-yellow-95": "hsl(39, 100%, 95%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "green-teal-95": "hsl(166, 100%, 95%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",
        "cobalt-blue-95": "hsl(234, 85%, 95%)",
        "light-slate-blue": "hsl(252, 100%, 67%)",
        "light-royal-blue": "hsl(241, 81%, 54%)",
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "persian-blue": "hsla(241, 72%, 46%, 0)",
        "pale-blue": "hsl(221, 100%, 96%)",
        "pale-blue-94": "hsl(225, 100%, 94%)",
        "very-pale-blue": "hsl(225, 100%, 98%)",
        "desaturated-blue": "hsl(224, 23%, 55%)",
        "bright-blue": "hsl(245, 75%, 52%)",
        "light-lavender": "hsl(241, 100%, 89%)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",
        "dark-blue": "hsl(223, 47%, 23%)",

        // AGE CALCULATOR APP COLORS
        "age-purple": "hsl(259, 100%, 65%)",
        "age-light-red": "hsl(0, 100%, 67%)",
        "age-off-white": "hsl(0, 0%, 94%)",
        "age-light-grey": "hsl(0, 0%, 86%)",
        "age-smokey-grey": "hsl(0, 1%, 44%)",
        "age-off-black": "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
