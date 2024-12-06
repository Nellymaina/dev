/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        golden:'#FFD700',
        luminousBlue:{
          DEFAULT:'#4FC3F7',
          light:'#81D4FA',
          dark:'#039BE5'
        },

        neonGreen:'#39FF14'
      },


      fontFamily:{
        monaco:['Monaco', 'Courier', 'monospace'],
        fancy:['Lobster','cursive'],
        pressStart: ['Press Start 2P', 'system-ui']
      },

      screens:{
        portrait:{raw:"orientation:portrait"},
        landscape:{raw:"orientation:portrait"},

        
      }

    },
  },
  plugins: [],
}

