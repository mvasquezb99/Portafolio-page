import React from "react";
import ProjectsCard from "./ProjectsCard";
function Projects() {
    return (
        <>
            <h1 className="text-4xl w-full text-center mb-4">Projects</h1>
            <section className=" h-[46%] w-full" >
                <div className="w-full h-full flex flex-row justify-evenly">
                    <ProjectsCard title={'Web related'}/>
                    <ProjectsCard title={'Non web related'}/>
                    <ProjectsCard title={'Leadership'}/>
                </div>
            </section>
        </>
    )
}

export default Projects;