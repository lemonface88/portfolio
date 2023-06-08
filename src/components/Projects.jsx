import React from "react";

function Projects() {
    return(
        <div className="relative container h-screen w-screen flex flex-col justify-start">
        

        <div className="relative container w-screen flex flex-col justify-start items-center space-y-5 pt-24" >

        <h1 class="italic text-center mb-4 text-4xl font-black leading-none tracking-wide text-gray-900 md:text-5xl lg:text-5xl">
                Project  Gallery</h1>
            
            <p className="mb-6 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-500 text-center">
            Hello welcome to my project gallery!  <br/>
            This is some of the stuff that I have done in the past or currently working on.<br/>
            </p>

        </div>

        
        <div className="pl-24 pt-24 relative container h-screen w-screen flex flex-row space-x-10">

        
        <a href="https://github.com/lemonface88/APcompsci-Mastermind">
        <div className=" rounded-lg transform h-64 bg-sky-200 w-80 transition duration-500 hover:scale-105 hover:bg-sky-400 flex flex-col justify-center items-center shadow-xl dark:shadow-gray-200">
        <p className="text-lg font-semibold text-gray-700 italic pt-12">
            Mastermind
        </p>

        <p className="text-xs opacity-0 hover:opacity-100 text-center w-4/5 pt-2">
            This is my first ever coding project. 
            This project demonstrates the fundamental techniques and skills that I aquired during AP computer science, and with 
            more research to build off the foundation, I was able to code the Mastermind game using Java. Sometimes I look back at this project,
            to remind myself how far I have progressed through the years.  
         
        </p>
        </div>
        </a>



        <a href="https://drive.google.com/drive/folders/1FyWzbaYjJmVEcoXbNLjTw48Aht4znyf6?usp=sharing">
        <div className="rounded-lg transform h-64 bg-green-200 w-80 transition duration-500 hover:scale-105 hover:bg-green-400 flex flex-col justify-center items-center shadow-xl dark:shadow-gray-200">
        <p className="text-lg font-semibold text-gray-700 italic">
            Yearbook Design
        </p>
        <p className="text-xs opacity-0 hover:opacity-100 text-center pt-5 w-4/5 padding-bottom-10">
            These are a few pages of the yearbook that I designed for Kaohsiung American School, I used Photoshop and a few other sources
            to put together each page, and designed accordgingly to themes that the grade requested.  
        </p>
        </div>
        </a>


        <div className="rounded-lg transform h-64 bg-pink-200 w-80 transition duration-500 hover:scale-105 hover:bg-pink-400 flex justify-center items-center shadow-xl dark:shadow-gray-200">
        <p className="text-lg italic text-gray-500 animate-pulse">
            Currently in progress
        </p>
        </div>



        </div>


            </div>
    )
}

export default Projects
