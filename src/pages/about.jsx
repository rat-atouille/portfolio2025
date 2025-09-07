
import React from "react";

const About = () => {
    return (
        <div className="flex flex-row items-start justify-between min-h-screen max-h-screen">   
            <div className="">
                Hi, I'm <span className="font-bold">Nina</span>.
            </div>
            <div className="bg-green-100 flex grid grid-cols-2 gap-4 ">
                <div className="bg-green-300 text-left">
                    <h1 className="font-bold ">EDUCATION</h1>
                    <div className="bg-green-500 flex grid grid-cols-2">
                        <div className="text-gray">Present</div>
                        <div className="bg-red-100">
                            <div>University of Western Ontario</div>
                            <div>Bachelor of Science in Computer Science</div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold">SKILLS</h1>
                    <div>
                        <div>Swift</div>
                        <div>Java</div>
                        <div>Python</div>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold">EXPERIENCE</h1>
                    <div>
                        <div>05.2025</div>
                        <div>Software Dev @ CIBC</div>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold">PROJECTS</h1>
                    <div>
                        <div>08.2025</div>
                        <div>DalGom</div>
                    </div>
                    <div>
                        <div>08.2025</div>
                        <div>Clink</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;