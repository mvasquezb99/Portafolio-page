import React from "react";
import RoadMapContent from "../helpers/RoadMapContent";
import useToggle from "../hooks/useToggleState";
function TimeStamp({ year }) {
    const [isShown, toggleShown] = useToggle();

    const handleToggle = () => {
        toggleShown();
    }
    return (
        <div className=" w-1/6 flex flex-col items-center">
            <figure className={`h-10 w-10 bg-white rounded-full mb-2 flex justify-center items-center ${!isShown ? 'animate-pulse' : ' -translate-y-2'} transition ease-out delay-75`} onMouseEnter={handleToggle} onMouseLeave={handleToggle} >
                <i className=" border-r-4 border-b-4 h-4 w-4 -rotate-45 mr-2 border-green-500"></i>
            </figure>
            <p className="text-l mb-3 font-semibold">{year}</p>
            <div className={`${!isShown ? 'opacity-0' : 'opacity-100'} transition ease-in-out delay-75`}>
                {
                    isShown ?
                        <p className={` text-sm text-center border border-white p-1 rounded`}>
                            {RoadMapContent[year]}
                        </p>
                        : ' '
                }
            </div>
        </div>
    )
}

export default TimeStamp;