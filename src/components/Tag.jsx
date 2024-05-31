import React from "react";
function Tag({text}) {
    return (
        <div className="h-full w-fit bg-white rounded-3xl flex flex-row justify-center items-center mr-1.5 mb-1.5">
            <p className="text-center text-black/70 text-xs p-3">
                {text}
            </p>
        </div>
    )
}

export default Tag;