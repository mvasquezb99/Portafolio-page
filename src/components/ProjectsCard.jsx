import React from "react";
import Project from "./Project";
function ProjectsCard({title}){
    return(
        <section className="w-1/3 h-full ml-2 mr-2 pl-3 pr-3 flex flex-col items-center">
            <h2 className="text-xl text-center mb-5">{title}</h2>
            <Project id={'2'}/>
            <Project id={'1'}/>
            <Project id={'3'}/>
        </section>
    )
}


export default ProjectsCard;