import React from "react";
import Tag from "./Tag";

function Project({ content, type }) {
    const { technologies, list } = content;
    console.log(list);
    return (
        <div className="w-full h-full flex flex-col justify-start">
            <h2 className={`text-start w-full ${type === 'long-x' ? 'text-3xl' : type === 'xLarge' ? 'text-5xl' : 'text-4xl'}  mb-2`}>{content.name}</h2>
            <p className="text-base mb-2.5">
                {content.description}
            </p>
            {
                technologies.length !== 0 ? <div className="w-full h-7 flex flex-row flex-wrap">
                    {
                        technologies.map((t) => (
                            <Tag text={t} />
                        ))
                    }
                </div> : list.length !== 0 ? <div className="pl-4">
                    <ul className=" list-disc h-full w-full">
                        {
                            list.map((l) => (
                                <li className="text-sm">{l}</li>
                            ))
                        }
                    </ul>
                </div>
                    : <></>
            }
        </div>
    )
}

export default Project;