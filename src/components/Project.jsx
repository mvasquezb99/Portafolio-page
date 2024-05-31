import React from "react";
import Tag from "./Tag";

function Project({content, type}) {
    const {technologies} = content;
    return (
        <div className="w-full h-full flex flex-col justify-start">
            <h2 className={`text-start w-full ${type === 'long-x' ? 'text-3xl' : 'text-5xl'}  mb-2`}>{content.name}</h2>
            <p className="text-base mb-2.5">
                {content.description}
            </p>
            <div className="w-full h-7 flex flex-row flex-wrap">
                {
                    technologies.map((t) => (
                        <Tag text={t}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Project;