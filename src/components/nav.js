import {React, useState }from 'react'
import { LinkedIn } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import { MenuOpenRounded } from '@mui/icons-material'
import {Link as Li} from 'react-scroll'
import {motion, AnimatePresence} from 'framer-motion'
export default function Navbar(){

  const [menu, setMenu]=useState(true)

  function toggleMenu(){
    setMenu(prevState=>!prevState)
  }


  return (
    <div>
    <div className='border-4xl border-red-100 w-full z-[50] fixed bg-gray-100' >
      
          <div className='flex justify-between p-4 w-full '>
        
        <div className='flex space-x-4 '>
          <a href="https://github.com/NellyMaina" target="blank" rel="noopener noreferrer" aria-label='Open in new tab'><LinkedIn /></a>
          <a href="https://github.com/NellyMaina" target="blank" rel="noopener noreferrer" aria-label='Open in new tab' ><GitHub  className='text-red-600'/></a>
          </div>
          
          {menu===true?<MenuOpenRounded onClick={toggleMenu} className='float-right text-orange-400 rounded-full bg-black ' />:<button className='float-right text-red-600 rounded-full bg-black px-2 py-0' onClick={toggleMenu}>X</button>}
          </div>

          
</div>

    <AnimatePresence>

        {menu===false && 
          <motion.div className=' w-[50vw] fixed z-[52] '
          initial={{x:'-100%'}}
          animate={{x:0}}
          exit={{x:'-100%'}}
          transition={{duration:0.3}}
          >
            <div className=' text-xl bg-black h-screen w-[80vw] sm:[50vw] lg-[40vw]'>
          <Li to="about" className='border-b text-white border-golden flex justify-center p-2 hover:bg-golden hover:text- '  onClick={toggleMenu}>About </Li>
          <Li to="skills" className='border-b text-white border-golden flex justify-center p-2 hover:bg-golden hover:text-black ' onClick={toggleMenu}>Skills</Li>
          <Li to="portfolio" className='border-b text-white border-golden flex justify-center p-2 hover:bg-golden hover:text-black ' onClick={toggleMenu}>Portfolio</Li>
          <Li to="contact" className='border-b text-white border-golden flex justify-center p-2 hover:bg-golden hover:text-black ' onClick={toggleMenu}>Contact</Li>
          </div>
          </motion.div>
          }
          </AnimatePresence>

          
        
          
                </div>
  )
}

