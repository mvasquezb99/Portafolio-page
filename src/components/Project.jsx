import React from "react";

// h-2/6 original
function Project({ id }) {

    // const actionHover = (e) => {
    //     let id = e.target.id;
    //     let t1;
    //     let t2;

    //     if (id.charAt('1') === '2') {
    //         t1 = document.getElementById(`${id[0]}1`);
    //         t2 = document.getElementById(`${id[0]}3`);

    //     } else if (id.charAt('1') === '3') {
    //         t1 = document.getElementById(`${id[0]}1`);
    //         t2 = document.getElementById(`${id[0]}2`);
    //     }

    //     if (e.type === 'mouseenter') {
    //         t1.classList.add('opacity-45', 'scale-[0.8]', 'blur-md');
    //         t2.classList.add('opacity-45', 'scale-[0.8]', 'blur-md');
    //     } else if(e.type === 'mouseleave'){
    //         t1.classList.remove('opacity-45', 'scale-[0.8]', 'blur-md');
    //         t2.classList.remove('opacity-45', 'scale-[0.8]', 'blur-md');
    //     }
    // }

    return (
        <div 
            id={id} 
            name={'card'} 
            className=
                {`w-full h-full ${id === '1' ? ' row-span-3': id === '3' ? 'row-span-2' : id === '4' ? 'col-span-2' : 'row-span-1'}
                bg-white/20  rounded-xl backdrop-blur-md hover:bg-white 
                transition ease-in-out delay-100 hover:cursor-pointer hover:scale-110 hover:z-50 
                flex flex-row justify-center items-center`}>

            <div className="bg-white w-14 h-14 rounded-sm">
                
            </div>
        </div>
    )
}

export default Project;