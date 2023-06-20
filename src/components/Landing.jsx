import React from "react";


function Landing(){
    return(
        
        <div className="relative container h-screen w-screen flex flex-col justify-start items-center pl-24 z-0">
        

            
            <div className="items-center flex flex-row pt-52"> 
            {/* This is the div for my name */}
            <h1 class="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Hello there! I'm Harrison Huang,</h1>

            </div>

                        
            <div className="flex flex-row pt-10">
            <p class="mb-6 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-500 text-center">
                Welcome to my portfolio, I am a third year student at University of Toronto 
                    currently studying psychology and statistics.
                    With some prior coding experiences, 
                    I am currently teaching myself Tailwindcss and exploring the front end developing world.
            </p>

            </div>


            <div className="relative">
                
                <div class="relative w-full max-w-lg opacity-30">
                <div class="absolute top-0 left-4 w-96 h-96 bg-sky-300 rounded-full mix-blend-multiply filter blur-2xl opacity-75 animate-blob"></div>
                <div class="absolute top-0 right-4 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-75 animate-blob animation-delay-2000"></div>
                <div class="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-75 animate-blob animation-delay-4000"></div>
                <div class="m-8 relative space-y-4">
                </div>
                </div>

            </div>

            <div className="">

                <p className="font-normal">
                <span class="text-transparent bg-clip-text bg-gradient-to-r to-green-500 from-sky-500">
                Constantly learning and making new changes along the way...</span>
                
                </p>
            </div>



            <div className="pt-52 flex flex-row items-center space-x-10 z-10">
            <a href="https://www.linkedin.com/in/harrison-huang-81b475204/" target="_blank">
            <img src="/assets/linkedin.png"  
                     className="w-8"/> 
            </a>

            <a href="https://github.com/lemonface88" target="_blank">
            <img src="/assets/github.png"  
                     className="w-8"/> 
            </a>
   
            </div>


        </div>


    )

}

export default Landing 
