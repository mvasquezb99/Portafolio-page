import React from "react";

// h-2/6 original
function Project({id}){

    const sendBack = (id) => {
        const elements = document.getElementsByName('card');

        elements.forEach((element) => {
            if(element.id === '1'){
                element.classList.add('bg-red-200');
            }
        })
    }

    
    return(
        <div id={id} name={'card'} className={`w-3/4 h-[20%] bg-white border border-black rounded-xl peer peer-hover:opacity-45 peer-hover:scale-[0.8] peer-hover:blur-md hover:cursor-pointer transition ease-out`} onMouseEnter={sendBack}>

        </div>
    )
}

export default Project;