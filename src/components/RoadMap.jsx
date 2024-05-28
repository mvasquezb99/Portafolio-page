import React from "react";
import TimeStamp from "./TimeStamp";
function RoadMap(){
    return(
        <div className="w-full h-screen pt-16 flex flex-col items-center pl-4 pr-4">
            <h1 className="text-4xl w-full text-center pb-3">My roadmap</h1>
            <small className="w-full text-center text-sm pb-6">Hover to see each time stamp!</small>
            <div className="w-full h-64 mt-5 ml-4 mr-4 pl-5 pr-5 max-w-7xl">
                <div className="w-full h-fit flex flex-row justify-center">
                    <TimeStamp year={'2021'}/>
                    <TimeStamp year={'2022'}/>
                    <TimeStamp year={'2022 - 2026'}/>
                    <TimeStamp year={'2026'}/>
                    <TimeStamp year={'While I keep living'}/>
                </div>
            </div>
        </div>
    )
}

export default RoadMap;