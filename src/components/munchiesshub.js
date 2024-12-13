import React from 'react'

export default function Munchies(){
    return(
        <div className='w-full relative h-auto pt-16'>
            <div>
            <h1 className='sm:text-2xl text-2xl md:text-3xl  inset-0  w-auto font-Tilt flex justify-center   text-neonGreen p-8'>Brief Overview </h1>
            <p className="text-[16px] text-white sm:text-[18px] mr-4 ml-4 mb-6">This project is a personal e-commerce website for selling snacks, built using React.js. It incorporates key features such as product browsing, user authentication, and cart management. The app is styled with CSS for a clean interface, and interactive components like image carousels enhance user engagement. State management is powered by React-Redux, while user authentication is handled with Node.js and Express.js. This project demonstrates my skills in building modern, functional web applications.
            </p>
            <h2 className='text-xl sm:text-2xl mb-4 flex justify-center mt-5 text-bold text-neonBlue font-fancy '>Front-End Development:</h2>
            <ul className='list-disc text-white pl-6 space-y-2 ml-6 text-[16px] sm:text-[18px]'>
                <li>Built with <span className="text-neonGreen font-Tilt text-[16px] ">React.js</span> ensuring a dynamic and responsive user interface.
                </li>
                <li><span className="text-neonGreen font-Tilt text-[16px] ">CSS</span> was used for custom styling, achieving a clean and visually appealing design.</li>
                <li><span className="text-neonGreen font-Tilt text-[16px]">React Router</span> enables seamless navigation across different pages, enhancing the user experience.</li>

            </ul>
            <h2 className='text-xl sm:text-2xl mb-4 flex justify-center text-bold text-neonBlue font-fancy mt-5 '>State Management:</h2>
            <ul className='list-disc text-white pl-6 space-y-2 ml-6 text-[16px] sm:text-[18px]'>
                <li>Integrated <span className="text-neonGreen font-Tilt text-[16px] ">React-Redux</span> to manage the application's state effectively.
                </li>
                <li>Features for adding and removing items from the cart are implemented, providing users with a smooth shopping experience.</li>
            </ul>
            <h2 className='text-xl sm:text-2xl mb-4 flex justify-center text-bold text-neonBlue font-fancy mt-5 '>Interactive Components:</h2>
            <ul className='list-disc text-white pl-6 space-y-2 ml-6 text-[16px] sm:text-[18px]'>
                <li>Leveraged the <span className="text-neonGreen font-Tilt text-[16px]">React Carousel</span> library to create visually engaging image carousels on the Home and Category pages, showcasing snack products effectively.</li>
            </ul>
            <h2 className='text-xl sm:text-2xl mb-4 pt-4 flex justify-center text-bold text-neonBlue font-fancy mt-5'>Authentication:</h2>
            <ul className='list-disc text-white pl-6 space-y-2 ml-6 text-[16px] sm:text-[18px]'>
                <li>The Sign-Up and Log-In functionalities were built using <span className="text-neonGreen font-Tilt text-[16px] ">Node.js</span> and <span className="text-neonGreen font-Tilt text-[16px] ">Express.js</span>, ensuring secure and reliable user authentication.</li>
            </ul>
            </div>
            <div>
                <h1 className='sm:text-2xl text-2xl md:text-3xl  inset-0 mt-20 w-auto font-Tilt flex justify-center   text-neonGreen p-8'>Project Goals:</h1>
                <ul className='list-disc text-white pl-6 space-y-2 ml-6 text-[16px] sm:text-[18px]'>
                    <li>
                    To demonstrate a complete e-commerce workflow, including navigation, product browsing, cart management, and user authentication. 
                    </li>
                    <li >To demonstrate a complete e-commerce workflow, including navigation, product browsing, cart management, and user authentication.</li>
                </ul>
                <p className="text-[16px] text-white sm:text-[18px] mr-4 ml-4 mb-6">This project reflects my ability to work with a modern tech stack, manage state effectively, and create user-friendly interfaces with attention to detail.</p>
            </div>
        </div>
    )
}