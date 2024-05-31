import React from "react";
import RoadMapContent from "../helpers/RoadMapContent";
function TimeStamp({ year }) {
    return (
        <div className={`w-1/5 h-full flex flex-col items-center hover:scale-110 transition-all ease-in-out delay-75 p-2 pt-3 rounded-md `}>
            <figure className={`h-10 w-10 bg-white rounded-full mb-2 flex justify-center items-center transition ease-out delay-75`}>
                <i className=" border-r-4 border-b-4 h-4 w-4 -rotate-45 mr-2 border-green-500"></i>
            </figure>
            <p className="text-l mb-3 font-semibold">{year}</p>
            <div className={`w-2/3`}>
                <p className={`text-xs text-center p-1 rounded `}>
                    {RoadMapContent[year]}
                </p>
            </div>
        </div>
    )
}

export default TimeStamp;