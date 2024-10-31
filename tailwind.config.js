/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(175deg, #211A2A 0%, #321178 100%);',
        'gradient-linear-50': 'linear-gradient(175deg, #37303F 0%, #4517a5 100%);',
        'gradient-linear-off': 'linear-gradient(175deg, #7a7983 0%, #8c85a9 100%)',
        'gradient-lineardown': 'linear-gradient(to bottom, #211A2A 0%, #321178 100%)'
      },
      colors:{
        'primary-color': '#3F1F74',
        'font-color':'#230061',
        'border-color':'#250061',
      },
      boxShadow:{
        'sidd': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}
