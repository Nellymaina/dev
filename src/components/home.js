import React, { useEffect } from 'react'
import image from '../images/home.png'
import { Element } from 'react-scroll'
import About from './about'
import Abt from './about2.js'
import Cert from './cert.js'
import Skills from './skills'
import Portfolio from './portfolio'
import Contact from './contact'
import Footer from './footer'
import {Typewriter} from 'react-simple-typewriter'
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function Home(){

  useEffect(()=>{
AOS.init({
  duration: 2000,
  delay:100,
  offset:0
})
  },[])

    
    return(
      <div className='h-auto pt-16'>
        <div className='relative p-2 portrait:min-h-[90vh]   landscape:min-h-[120vh] landscape:sm:max-h[100vh] landscape:md:min-h[100vh] landscape:lg:min-h-[89vh]'>


<div className='absolute top-0 left-0 w-3/4 sm:w-1/2 h-20 border-t-4 border-l-4 border-neonGreen'></div>
<div className='absolute bottom-0 right-0 w-3/4 sm:w-1/2 h-20 border-b-4 border-r-4 border-neonGreen'></div>



<div className='absolute bottom-2 right-2 '>
<img src={image} alt='' className='float-right portrait:h-[40vh] landscape:h-[70vh] portrait:sm:h-[50vh] landscape:sm:h-[90vh] portrait:md:h-[40vh] landscape:md:h-[90vh] landscape:lg:h-[82vh] ' />     

 </div>
     




        
<div className=''>
          <p className=' absolute h-auto text-3xl  md:text-4xl text-white font-bold flex justify-center'>NELLY MAINA </p>
          <div className='absolute landscape:h-full landscape:lg:h-[70vh] portrait:h-[80vh] inset-0 flex justify-center items-center flex-col pb-2 pt-0'>
          <p className=" font-game text-2xl md:text-4xl text-neonGreen ">SOFTWARE <span className=' text-luminousBlue-light'>DEVELOPER</span></p>
          <div className=' mt-4 text-white text-[18px] md:text-2xl flex justify-center items-center text-center h-auto sm:w-[50vw] w-[80vw]'><Typewriter words={[ 'Hi, My name is Nelly and I am a Front-End developer','Channeling Creative Ideas and Solving Problems Through Lines Of Code']} loop={1} typeSpeed={70} delaySpeed={1000} deleteSpeed={50}/>
          </div>
          </div>
          </div>
          
          
                        

</div>

<div data-aos="zoom-in"  data-aos-easing="ease" className='box'><Element  name="about"><About /></Element></div>
<Abt />
<Cert />
<Element  data-aos="zoom-in"  data-aos-easing="ease" className='box' name="skills"> <Skills /> </Element>
<Element data-aos="zoom-in"  data-aos-easing="ease" className='box' name='portfolio'><Portfolio/></Element>
<Element data-aos="zoom-in"  data-aos-easing="ease" className='box' name='contact'><Contact/></Element>
<Footer />
        </div>
    )


}