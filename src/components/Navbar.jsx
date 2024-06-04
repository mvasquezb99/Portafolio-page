import React from "react";

function Navbar() {
    return (
        <nav className="w-fit h-11 flex flex-row justify-center sticky top-0 backdrop-blur-md bg-white/20 rounded-3xl mt-3">
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