import React from "react";
import BentoBox from "./BentoBox";
import projectsContent from "../helpers/ProjectsContent";
function Projects() {
    const {p1,p2,p3,t1,t2} = projectsContent;
    return (
        <section className=" h-[50%] w-full flex flex-col items-center mt-4" >
            <div className=" max-w-screen-xl xl:w-4/6 w-full h-full grid grid-cols-8 grid-rows-3 gap-1.5">
                <BentoBox type={'long-x'} id={'title'} content={'Education'}/>
                <BentoBox type={'small'} id={'semester'} content={''}/>
                <BentoBox type={'long-x'} id={'p2'} content={p2}/>
                <BentoBox type={'long-xl'} id={'title'} content={'Projects'}/>
                <BentoBox type={'long-y'} id={'ranks'} content={''}/>
                <BentoBox type={'large'} id={'t2'} content={t2}/>
                <BentoBox type={'long-x'} id={'p4'} content={p3}/>
                <BentoBox type={'xLarge'} id={'p1'} content={p1}/>
                <BentoBox type={'long-x'} id={'p4'} content={t1}/>
            </div>
        </section>
    )
}

export default Projects;