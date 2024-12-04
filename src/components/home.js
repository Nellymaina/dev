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
        <div className='relative p-2 home portrait:min-h-[90vh]  landscape:min-h-[120vh] landscape:sm:max-h[100vh] landscape:md:min-h[100vh] landscape:lg:min-h-[85vh]'>


<div className='absolute top-0 left-0 w-1/2 sm:w-1/3 h-20 border-t-4 border-l-4 border-golden'></div>
<div className='absolute bottom-0 right-0 w-1/2 sm:w-1/3 h-20 border-b-4 border-r-4 border-golden'></div>



<div className='absolute bottom-2 right-2 '>
<img src={image} alt='' className='float-right portrait:h-[40vh] landscape:h-[70vh] portrait:sm:h-[50vh] landscape:sm:h-[90vh] portrait:md:h-[40vh] landscape:md:h-[90vh] landscape:lg:h-[82vh] ' />     

 </div>
     




        
<div className=''>
          <p className=' absolute h-auto text-xl sm:text-2xl  md:text-5xl lg:text-4xl font-bold flex justify-center'>NELLY MAINA </p>
          <div className='absolute landscape:h-full landscape:lg:h-[70vh] portrait:h-3/4 inset-0 flex justify-center items-center flex-col pb-2 pt-0'>
          <p className="bg-blue-200 font-monaco text-base sm:text-xl md:text-2xl lg:text-3xl">SOFTWARE <span className='bg-gray-300 border-2 border-gray-300'>DEVELOPER</span></p>
          <div className=' mt-4 bg-white text-[16px] sm:text-[18px] flex justify-center items-center w-[50vw]'><Typewriter words={[ 'Hi, My name is Nelly and I am a Front-End developer','Channeling Creative Ideas and Solving Problems Through Lines Of Code']} loop={1} typeSpeed={70} delaySpeed={1000} deleteSpeed={50}/>
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