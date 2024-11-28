/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        golden:'#FFD700'
      },
      fontFamily:{
        monaco:['Monaco', 'Courier', 'monospace'],
        fancy:['Lobster','cursive']
      },

      screens:{
        portrait:{raw:"orientation:portrait"},
        landscape:{raw:"orientation:portrait"}
      }

    },
  },
  plugins: [],
}

