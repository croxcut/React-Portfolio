import React, { useState } from "react";
import BannerImg from "../assets/images/bannerImg.png";

type Project = {
    title: string;
    description: string;
    image?: string | null;
    date: string;
    techStack: string[];
};

const projects: Project[] = [
    {
        title: "Movie Reservation [C]",
        description: "This is the first project.",
        image: null,
        date: "December 2022",
        techStack: ["React", "TypeScript", "TailwindCSS"],
    },
    {
        title: "Zellion [HTML5]",
        description: "This is the first project.",
        image: null,
        date: "May 2023",
        techStack: ["React", "TypeScript", "TailwindCSS"],
    },
    {
        title: "Laboratory Reservation [C]",
        description: "This is the second project.",
        image: null,
        date: "May 2023",
        techStack: ["Next.js", "Node.js", "Express"],
    },
    {
        title: "Arduino Pinball Machine [C++]",
        description: "This is the second project.",
        image: null,
        date: "May 2023",
        techStack: ["Next.js", "Node.js", "Express"],
    },
    {
        title: "Auditorium Reservation [Java]",
        description: "This is the third project.",
        image: null,
        date: "May 2024",
        techStack: ["React Native", "Expo"],
    },
    {
        title: "Gabochay [Java]",
        description: "This is the third project.",
        image: null,
        date: "December 2024",
        techStack: ["React Native", "Expo"],
    },
    {
        title: "Pixl [C/C++]",
        description: "This is the third project.",
        image: null,
        date: "July 2024 - Present",
        techStack: ["React Native", "Expo"],
    },
    {
        title: "Beany [kotlin]",
        description: "This is the third project.",
        image: null,
        date: "December 2025",
        techStack: ["React Native", "Expo"],
    },
    {
        title: "Beany download page [HTML, CSS]",
        description: "This is the third project.",
        image: null,
        date: "December 2025",
        techStack: ["React Native", "Expo"],
    },
];

function MainPage() {
    const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePos({ x: e.clientX + 20, y: e.clientY + 20 });
    };

    return (
        <div>
            <div className="w-screen h-[200px] sm:h-[220px] lg:h-[280px] bg-blue-900 relative overflow-hidden">
                    <div className="w-screen h-full relative z-10 flex flex-col justify-center items-center">
                        <h1 className="text-white font-mono w-4/5 text-2xl lg:w-2/4 lg:text-4xl">Jaypee</h1>
                        <h3 className="text-white font-mono w-4/5 text-sm lg:w-2/4 lg:text-sm">John Paul N. Valenzuela</h3>
                    </div>
                    <div className="w-screen">
                        <img
                            src={BannerImg}
                            alt=""
                            className="absolute right-0 md:right-1/10 lg:right-1/4 top-0 h-full w-[290px] sm:w-[250px] lg:w-[550px] object-cover"
                        />
                    </div>
            </div>
            <div className="w-screen h-auto flex flex-col items-center">
                <div className="my-4 w-2/4 flex justify-center lg:justify-start">
                    <h1 className="font-mono font-bold text-2xl">Projects</h1>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 md:w-3/4 lg:w-2/4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative rounded-lg border-2 border-gray-300 overflow-hidden cursor-pointer aspect-square
                                        transform transition duration-300 ease-out hover:scale-105 hover:-translate-y-1"
                            onMouseEnter={() => setHoveredProject(project)}
                            onMouseLeave={() => setHoveredProject(null)}
                            onMouseMove={handleMouseMove}
                        >
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                                ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                                    No Image
                                </div>
                            )}
                            <div className="absolute bottom-0 w-full bg-white bg-opacity-80 p-2 text-center font-bold h-12 flex items-center justify-center">
                                <p className="title-text">{project.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {hoveredProject && (
                    <div
                        className="fixed z-50 w-72 p-4 bg-white border-2 border-gray-300 rounded-lg shadow-lg pointer-events-none"
                        style={{ left: mousePos.x, top: mousePos.y }}
                    >
                    <h2 className="font-bold text-lg mb-2">{hoveredProject.title}</h2>
                        <p className="mb-2">{hoveredProject.description}</p>
                        <p className="text-sm mb-1">Date: {hoveredProject.date}</p>
                        <p className="text-sm">Tech Stack: {hoveredProject.techStack.join(", ")}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MainPage;