import React from "react";
import image1 from '../images/AI.png'


export default function Blog(){

    return(
        <div className="h-[100vh] pt-[10vh] relative landscape:pt-[16vh] landscape:lg:pt-[8vh] bg-black flex justify-center items-center">
                <img src={image1} alt=""  className="max-h-[80vh] landscape:h-7/9" />
            </div>
    )
}