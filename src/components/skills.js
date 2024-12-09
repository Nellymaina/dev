import React from 'react'
import data from './skills-data'

export default function Skills(){


    const newData=data.map(item=>{
        return(
            <div >
            <img className='portrait:h-[10vh] landscape:h-[15vh]' src={item.image} alt=''/>
            <p className='text-[12px] sm:text-[14px] lg:text-[16px] text-white'>{item.name}</p>
            </div>
    
        )
    })

    return (
<div className='pt-[16vh] h-auto w-full shadow shadow-lg shadow-neonGreen pb-10'>

<h2 className=' sm:text-2xl text-2xl md:text-3xl  inset-0  w-auto font-Tilt flex justify-center   text-neonGreen p-8'>Skills</h2>

        <div className='flex justify-center items-center mt-4 '>

<div className=' grid grid-cols-4 gap-4 lg:w-[50vw] w-[100vw] ml-2 mr-2'>{newData}</div>

</div>
        </div>
    )
}