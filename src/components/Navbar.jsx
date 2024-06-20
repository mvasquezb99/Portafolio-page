import React from "react";

function Navbar() {
    return (
        <nav className="w-full h-16 flex flex-row justify-center top-0 backdrop-blur-md bg-white/5 sticky z-50">
            <div className="flex justify-evenly w-96">
                <a href="#experience" className=" text-xl flex flex-row items-center transition border-b-2 border-transparent ease-linear delay-100 hover:border-current">
                    Projection
                </a>
                <a href="#home" className=" text-xl flex flex-row items-center transition border-b-2 border-transparent ease-linear delay-100 hover:border-current ">
                    Home
                </a>
                <a href="#aboutMe" className=" text-xl flex flex-row items-center transition border-b-2 border-transparent ease-linear delay-100 hover:border-current ">
                    About me
                </a>
            </div>
        </nav>
    )
} 

export default Navbar; 