import React from "react";

function Resume() {
    return(
        
        <div className="relative container h-screen w-screen flex flex-col justify-start items-center">



            <div className="flex flex-row pt-20 space-x-20 ">

                <div className="flex-col space-y-4 w-410">

                <h1 className="font-medium text-4xl text-decoration-line: underline">
                    Education:
                </h1>
                <p className="font-normal">
                    Psychology and Statistics Major at University of Toronto
                </p>
                
                 <h1 className="font-medium text-decoration-line: underline text-4xl py-5">
                Languages:
                </h1>

                <p className="">
                    Chinese(Simplified and Traditional) - Native level
                </p>
                <p className="">
                    English - Native level
                </p>
                <p className="">
                    Taiwanese Dialect - Native level
                </p>


                <h1 className=" text-3xl font-medium py-5 text-decoration-line: underline">
                Programing Experience:
                </h1>

                <div className="flex-col flex space-y-1 pl-5">

                <ul class=" font list-decimal">

                <li>Python: 1 + year</li>
                <li>Java:  1 + year</li>
                <li>R+ Studio: 1 + year</li>
                <li>CSS/JavaScript/HTML 4 months</li>
                </ul>

                </div>
 

                </div>


                <div className="flex-col w-410 space-y-7">

                <h1 className="font-medium text-4xl 	text-decoration-line: underline">
                    Work Experience:
                </h1>

                {/* below is the first work experience */}
                 <div className="italic font-medium flex-row flex space-x-60 text-2xl">
                    <p>
                        Arc'teryx 
                    </p>
                    <p>
                        Toronto, Canada
                    </p>
                 </div>
                
                <div className="font- flex-col pl-5">

                <ul class="list-disc">

                <li>Cash register</li>
                <li>Introduce products according to customers needs</li>
                <li>Assist in design and rearranging of product placement</li>
                </ul>

                </div>
                {/* above is the first work experience */}

                {/* below is the second work experience */}
                <div className="italic font-medium flex-row flex space-x-60 text-2xl">
                    <p>
                        Light Cafe
                    </p>
                    <p className="">
                        Toronto, Canada
                    </p>
                 </div>
                
                <div className="font- flex-col flex space-y-1 pl-5">

                <ul class="list-disc">

                <li>Taking orders and service of customers</li>
                <li>Opening and closing tasks for the store</li>
                </ul>

                </div>
                {/* above is the second work experience */}

                {/* below is the third work experience */}
                <div className="italic font-medium flex-row flex space-x-60 text-2xl">
                    <p>
                        Amazing Talker (Online Tutor)
                    </p>

                 </div>
                
                <div className="font- flex-col flex space-y-1 pl-5">

                <ul class="font- list-disc">

                <li>Interacted and taught students from all around the world</li>
                <li>Desinged and tailored lectures for each individual student</li>
                <li>Taught students with ages ranging from 8 to 40</li>

                </ul>

                </div>
                {/* above is the third work experience */}


                </div>


            </div>

            <div className=" pt-20">
            

            <div className=" flex flex-col ">
                
            <div className=" flex flex-row items-center space-x-3">

            <svg class ="w-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
            </svg>

            <p className="text-center text-xl pt-2 font-normal">
            <a href="harri.huang@mail.utoronto.ca" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">harri.huang@mail.utoronto.ca</a> <br />
                </p> 

            </div>


            <div className="flex flex-row items-center">
            
            <svg class ="w-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"></path>
            </svg>
            <p className="pl-10 font-normal text-xl">
                647-545-4201
            </p>

            </div>

            </div>


  

            </div>


        </div>
    )
}

export default Resume
