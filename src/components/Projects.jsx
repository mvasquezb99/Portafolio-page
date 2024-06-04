import React from "react";
import BentoBox from "./BentoBox";
import projectsContent from "../helpers/ProjectsContent";
function Projects() {
    const {p1,p2,p3,t1,t2} = projectsContent;
    return (
        <section className=" h-[52%] 2xl:h-full pb-4 w-full flex flex-col items-center mt-2 " >
            <div className="2xl:w-4/6 xl:w-4/5 h-full grid grid-cols-8 grid-rows-3 gap-1.5">
                <BentoBox type={'long-x'} id={'title-2'} content={'Education'}/>
                <BentoBox type={'small'} id={'e'} name={'semester'}/>
                <BentoBox type={'long-x'} id={'e'} content={t1}/>
                <BentoBox type={'long-xl'} id={'title-1'} content={'Projects'}/>
                <BentoBox type={'long-y'} id={'e'} name={'ranks'}/>
                <BentoBox type={'large'} id={'e'} content={t2}/>
                <BentoBox type={'long-x'} id={'p'} content={p3}/>
                <BentoBox type={'xLarge'} id={'p'} content={p1}/>
                <BentoBox type={'long-x'} id={'p'} content={p2}/>
            </div>
        </section>
    )
}

export default Projects;