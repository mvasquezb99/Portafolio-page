import React from "react";
import Project from "./Project";
import projectsContent from "../helpers/ProjectsContent";

function ProjectsCard({ title, id }) {
   const {p1,p2,p3,p4} = projectsContent[title];
    return (
        <section className="w-1/3 h-full ml-2 mr-2 pl-3 pr-3 flex flex-col items-center max-h-400 max-w-md">
            <h2 className="text-xl text-center mb-5">{title}</h2>
            <div className="w-7/12 h-full grid grid-cols-2 gap-2" >
                <Project id={`1`} content={p1} />
                <Project id={`2`} content={p2}/>
                <Project id={`3`} content={p3}/>
                <Project id={`4`} content={p4}/>
            </div>
        </section>
    )
}


export default ProjectsCard;