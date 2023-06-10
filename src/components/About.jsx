import React from "react";

function About() {
    return(
        <div className="Maindiv relative container h-screen w-screen flex flex-col justify-start items-center">

        <h1 class="italic pt-5 text-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                More about me</h1>

        <div className="relative container h-screen w-screen flex flex-row justify-start pt-5">

            {/* This is the left side of the screen*/}
            <div className="relative container h-screen w-screen flex flex-col justify-start">

                <div>
                <p class="italic text-3xl font-normal text-gray-900 pl-32 pt-20">
                Hello again!
                </p>
                </div>
                
                <div className="italic pt-12 pl-32 text-2xl">

                <p className=" font-normal text-gray-600 tracking-wide">
                    Other than work and school, I've dipped my foot in many different waters exploring many different areas of interest.
                    In my free time, I enjoy going outside biking, running and also bouldering. It helps me clear my mind when I feel overwelmed, 
                    being outdoor also expand my visions of the world and see it from different perspectives


                </p>
                
                </div>

                <div className="italic pt-12 pl-32 animate-pulse ">
                    <p className=" tracking-widest text-teal-500">
                    Nonstop exploring to see where the world may take me...
                    </p>
                    
                </div>


            </div>

            
            {/* this is the right side of the screen */}
            <div className="relative container h-screen w-screen flex flex-col justify-start">
            <div className="pl-24 pt-10">
                {/* Need to make photo a perfect square to turn into a perfect circle */}
                <img src="about1.png"  
                     alt="Harrison Huang"
                     className="rounded-lg shadow-xl dark:shadow-gray-400 h-4/6"/>
            </div>


            </div>


            {/* Below is the Div for what I do for fun*/}

            


        </div>

            
    

        </div>
        
    )
}

export default About
