import React from "react";
import ProjectsCard from "./ProjectsCard";
function Projects() {
    return (
        <section className=" h-[50%] w-full" >
            <h1 className="text-4xl w-full text-center mb-4">Projects</h1>
            <div className="w-full h-full flex flex-row justify-evenly">
                <ProjectsCard title={'Web related'} id={'l'} />
                <ProjectsCard title={'Non web related'} id={'c'}/>
                <ProjectsCard title={'Leadership'} id={'r'} />
            </div>
        </section>
    )
}

export default Projects;