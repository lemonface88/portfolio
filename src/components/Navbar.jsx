import React from "react";
import { useState } from "react";
import { Link , Outlet } from "react-router-dom";

function Navbar () {
    const [showNavMenu, setShowNavMenu] = useState(false);
    // camelCase
    return(
            <div className="flex flex-row justify-start items-end
                    w-screen h-screen" >

        <div className="absolute w-screen h-screen">
        <div className="h-screen w-screen flex flex-col items-end">
        <div className="pt-10 pr-10">
            
            <div onClick={() => setShowNavMenu(!showNavMenu)}>  {/*Once you click this div the Blue shownavmenu is what will show up*/}
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="w-6 h-6">      {/*This is where you change button size*/}

<path       stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
             />
            </svg>
            </div>

{/* Everything in the container below is what shows up once the dive above is clicked */}

{showNavMenu && (
    <div className=" animate-slideLeft">

    <ul className=" absolute pt-20 right-0 pr-10 flex-col justify-between    
    h-1/4 font-medium text-bold">

    <Link to={"/"}>
    <div> Home</div>
    </Link>

    <Link to={"/Projects"}>
    <div  className="pt-5">Projects </div>
    </Link>

    <Link to={"/Resume"}>
    <div className="pt-5">Resume </div>
    </Link>

    <Link to={"/About"}>
    <div className="pt-5"> About </div>
    </Link>

    </ul>
    </div>
)}

        </div>
        </div>
        </div>
        <Outlet/>
    </div>
    )
}

export default Navbar 