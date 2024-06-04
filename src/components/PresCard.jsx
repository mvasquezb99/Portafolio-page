import React, { useState, useEffect } from "react";

function PresCard() {
    const labels = ['Student', 'Teacher', 'Leader', 'Developer'];
    const [labelIdx, setLabelIdx] = useState(0);
    useEffect(() => {
        const mainTitle = document.getElementById('title-1');
        const mainStyle = window.getComputedStyle(mainTitle);
        const intervalID = setInterval(() => {
            const opStyle = mainStyle.getPropertyValue('opacity');
            if (opStyle <= 0.15) {
                setLabelIdx((idx) => idx < labels.length - 1 ? idx + 1 : 0);
            }
        }, 2000);
        return () => clearInterval(intervalID);

    }, []);

    return (
        <main className=' h-screen w-100 ml-94 mr-94 flex flex-col items-center justify-center'>
            <div className="w-full h-96 flex flex-row max-w-6xl">
                <section className="w-1/2 h-full ml-10 p-5 pr-0 flex items-start justify-center flex-col">
                    <p className=" text-2xl pl-1.5">Hello, I'm Miguel a</p>
                    <h1 id="title-1" className="text-8xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text animate-pulsePro">{labels[labelIdx]}</h1>
                    <p className=" text-2xl pl-1.5">and working to be so much more...</p>
                    <div className="h-10 w-96 mt-2 flex flex-row pl-0.5 items-center">
                        <a href="https://www.linkedin.com/in/miguel-v%C3%A1squez-bojanini-621b9a256/">
                            <svg className=" h-10  w-10 mr-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" >
                                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                            </svg>
                        </a>
                        <a href="https://github.com/mvasquezb99">
                            <svg className=" h-10 w-10 mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#fff" d="M41,24c0,9.4-7.6,17-17,17S7,33.4,7,24S14.6,7,24,7S41,14.6,41,24z"></path><path fill="#455a64" d="M21 41v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h1.8c.2-.3.2-.6.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1L21 41 21 41zM40.1 26.4C40.1 26.4 40.1 26.4 40.1 26.4c0 0-1.3-.4-2.4-.4 0 0-.1 0-.1 0-1.1 0-2.9.3-2.9.3-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2-.3 3.1-.3 1.1 0 2.4.4 2.5.4.1 0 .1.1.1.2C40.2 26.3 40.2 26.4 40.1 26.4zM39.8 27.2C39.8 27.2 39.8 27.2 39.8 27.2c0 0-1.4-.4-2.6-.4-.9 0-3 .2-3.1.2-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2.2-.2 3.1-.2 1.3 0 2.6.4 2.6.4.1 0 .1.1.1.2C39.9 27.1 39.9 27.2 39.8 27.2zM7.8 26.4c-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.2.8-.2 2.4-.5 3.3-.5.8 0 3.5.2 3.6.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0-2.7-.2-3.5-.2C10.1 26 8.6 26.2 7.8 26.4 7.8 26.4 7.8 26.4 7.8 26.4zM8.2 27.9c0 0-.1 0-.1-.1 0-.1 0-.1 0-.2.1 0 1.4-.8 2.9-1 1.3-.2 4 .1 4.2.1.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0 0 0 0 0 0 0-2.8-.3-4.1-.1C9.6 27.1 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9z"></path><path fill="#455a64" d="M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5c5.7,0,10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z"></path><path fill="#455a64" d="M28.6 16.3c0 0 1.7-2.3 4.8-2.3 1.2 1.2.4 4.8 0 5.8L28.6 16.3zM20.4 16.3c0 0-1.7-2.3-4.8-2.3-1.2 1.2-.4 4.8 0 5.8L20.4 16.3zM20.1 35.9c0 0-2.3 0-2.8 0-1.2 0-2.3-.5-2.8-1.5-.6-1.1-1.1-2.3-2.6-3.3-.3-.2-.1-.4.4-.4.5.1 1.4.2 2.1 1.1.7.9 1.5 2 2.8 2 1.3 0 2.7 0 3.5-.9L20.1 35.9z"></path><path fill="#00bcd4" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8 s16,7.2,16,16S32.8,40,24,40z"></path>
                            </svg>
                        </a>
                        <a className=" w-32 h-4/5 p-3 text-xs bg-blue-500 rounded-3xl flex justify-center items-center shadow-lg" href="">
                            Download my CV
                        </a>
                    </div>
                </section>
                <p className=" w-1/2 h-full mr-10 p-5 pl-0 flex flex-col justify-center text-lg">
                I'm a Systems Engineering student at EAFIT University, passionate about software development, computer systems and leadership. 
                    Very ext
                    Demonstrating teamwork skills, clearly and assertively communicating my ideas and encouraging the participation of all members 
                    when seeking a common goal.
                </p>
            </div>
        </main>
    )
}


export default PresCard;