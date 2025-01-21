import {React, useState }from 'react'
import { LinkedIn } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import { MenuOpenRounded } from '@mui/icons-material'
import {Link as Li, scroller} from 'react-scroll'
import {motion, AnimatePresence} from 'framer-motion'
import {useNavigate, useLocation} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Navbar(){

  const [menu, setMenu]=useState(true)

  function toggleMenu(){
    setMenu(prevState=>!prevState)
  }
const navigate=useNavigate();
const location=useLocation();
  
function handleNavigate(section){
  toggleMenu()

  if (location.pathname !== "/") {
    navigate("/");
    setTimeout(() => {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset:-120
      })
    }, 100);

   
  }
  
}


  return (
    <div>
    <div className='border-4xl border-red-100 w-full z-[50] fixed bg-black' >
      
          <div className='flex justify-between p-4 w-full '>
        
        <div className='flex space-x-4 '>
          <a href="https://www.linkedin.com/in/nelly-maina-5a7040213" target="blank" rel="noopener noreferrer" aria-label='Open in new tab'><LinkedIn /></a>
          <a href="https://github.com/NellyMaina" target="blank" rel="noopener noreferrer" aria-label='Open in new tab' ><GitHub  className='text-red-600'/></a>
          </div>
          
          {menu===true?<MenuOpenRounded onClick={toggleMenu} className='float-right text-neonGreen rounded-full bg-black ' />:<button className='float-right text-red-600 rounded-full bg-black px-2 py-0' onClick={toggleMenu}>X</button>}
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
          <Li  to="about" toggleMenu={toggleMenu} className='active:text-neonGreen border-b text-white border-gray-200 flex justify-center p-2 hover:bg-red-600 hover:text-black '  onClick={ (e) => {
if (location.pathname ==='/'){
  toggleMenu()

}
          if (location.pathname !== "/") {
          e.preventDefault();
            handleNavigate("about");
          }
        
        }} >About </Li>
          <Li to="skills" offset={-130} smooth={true} duration={500} className='active:text-neonGreen border-b text-white border-gray-200 flex justify-center p-2 hover:bg-red-600 hover:text-black 'onClick={ (e) => {
if (location.pathname ==='/'){
  toggleMenu()

}          if (location.pathname !== "/") {
            e.preventDefault();
            handleNavigate("skills");
          }
        }}>Skills</Li>
          <Li to="portfolio"  offset={-120} smooth={true} duration={500} className='active:text-neonGreen border-b text-white border-gray-200 flex justify-center p-2 hover:bg-red-600 hover:text-black 'onClick={ (e) => {
            if (location.pathname ==='/'){
              toggleMenu()
            
            }
            if (location.pathname !== "/") {
            e.preventDefault();
            handleNavigate("portfolio");
          }

        }}>Portfolio</Li>
          <Li to="contact" offset={-120} smooth={true} duration={500} className='active:text-neonGreen border-b text-white border-gray-200 flex justify-center p-2 hover:bg-red-600 hover:text-black ' onClick={ (e) => {
            if (location.pathname ==='/'){
              toggleMenu()
            
            } 
            if (location.pathname !== "/") {
             e.preventDefault();
            handleNavigate("contact");
          }
        }}>Contact</Li>

        <Link to='/' offset={-130} smooth={true} duration={500} className='active:text-neonGreen border-b text-white border-gray-200 flex justify-center p-2 hover:bg-red-600 hover:text-black ' onClick={toggleMenu}>Home</Link>
          </div>
          </motion.div>
          }
          </AnimatePresence>

          
        
          
                </div>
  )
}

