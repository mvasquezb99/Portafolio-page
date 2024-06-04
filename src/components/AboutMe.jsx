import React from "react";


function AboutMe() {
    return (

        <section className="w-full h-full flex flex-row justify-center items-center">
            <article className="w-2/3 h-2/4 flex flex-row justify-center items-center">
                <div className="bg-transparent rounded-full w-80 h-2/3 bg-personal bg-cover aspect-square bg-no-repeat bg-center" />
                <div className="w-1/2 pl-8 h-2/3">
                    <h1 className="text-4xl mt-4 mb-2">About me</h1>
                    <p className="text-base ">Lorem ipsum👋, dolor sit amet consectetur adipisicing elit. Eius, aperiam rerum minima nobis quisquam, consequuntur optio architecto qui, numquam alias voluptatum minus tempora? Optio enim aperiam voluptas reprehenderit quos fugit?
                    Architecto maxime, totam ipsa dignissimos enim ipsum perspiciatis atque sapiente nisi provident ducimus laudantium eligendi libero porro eveniet doloribus explicabo recusandae quos magni fuga. Iure dolores exercitationem ullam accusamus unde.
                    A id, quis dolorem, delectus incidunt enim omnis consectetur veniam ut totam nemo tempora temporibus fuga distinctio libero optio corrupti. Eligendi dolores magni minima aliquam eaque a omnis hic sequi.</p>
                </div>
            </article>
        </section>
    )
}

export default AboutMe;