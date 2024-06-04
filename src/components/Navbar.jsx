import React from "react";

function Navbar() {
    return (
        <nav className="w-full h-11 flex flex-row justify-center top-0 backdrop-blur-md bg-white/20 sticky z-50">
            <div className="flex justify-evenly w-96">
                <a className="flex flex-row items-center transition border-b border-transparent ease-linear delay-100 hover:border-current">
                    Projects
                </a>
                <a className="flex flex-row items-center transition border-b border-transparent ease-linear delay-100 hover:border-current ">
                    Education
                </a>
                <a className="flex flex-row items-center transition border-b border-transparent ease-linear delay-100 hover:border-current ">
                    Projection
                </a>
            </div>
        </nav>
    )
}


export default Navbar;