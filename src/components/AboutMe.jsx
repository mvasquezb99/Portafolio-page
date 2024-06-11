import React from "react";


function AboutMe() {
    return (

        <section className="w-full h-full flex flex-row justify-center items-center">
            <article className="w-2/3 h-2/4 flex flex-row justify-center items-center">
                <div className="bg-transparent rounded-full w-80 h-80 bg-personal bg-cover aspect-square bg-no-repeat bg-center" />
                <div className="w-1/2 pl-8 h-2/3">
                    <h1 className="text-4xl mb-2 mt-3">About me</h1>
                    <p className=" text-lg mb-2">Hi👋, as you know by now, my name is <span className=" text-[#fb8500] font-semibold">Miguel Vásquez Bojanini</span>. I am a fully committed student at EAFIT University and am currently going through the 6th semester of computer science. I´m passionate about design and web development (backend and frontend), always trying to give the user a beautiful and complete experience.</p>
                    <p className="text-lg mb-2"><span className="text-[#fb8500] font-semibold">I love to learn</span>, so I have many plans for my student and professional future. This website is where I'm going to be putting all of the progress I make until graduation.</p>
                    <p className="text-lg mb-2">Stay tuned, and thanks for reading this.</p>
                </div>
            </article>
        </section>
    )
}

export default AboutMe;