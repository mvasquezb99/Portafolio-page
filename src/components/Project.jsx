import React from "react";
import useToggle from "../hooks/useToggleState";
function Project({ id, content }) {
    const [isShown, toggle] = useToggle();

    return (
        <div
            id={id}
            name={'card'}
            className=
            {`w-full h-full ${id === '1' ? ' row-span-3' : id === '3' ? 'row-span-2' : id === '4' ? 'col-span-2' : 'row-span-1'}
                bg-white/20  rounded-xl backdrop-blur-md hover:bg-white 
                transition ease-in-out delay-100 hover:cursor-pointer hover:scale-110 hover:z-50 
                flex flex-row justify-center items-center`}>
            <div className=" w-14 h-14 rounded-sm flex flex-row justify-center items-center">
                {
                    !isShown ?
                        <p className="text-white ">
                            {content['logo']}
                        </p>
                    : <>
                    </>
                }
            </div>
            
        </div>
    )
}

export default Project;