'use client'
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 " >
        <ProjectCard
          src="/NextWebsitee.png"
          title="3D Iphone Website"
          description="This is a clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS."

        />
        <ProjectCard
          src="/CardImagee.png"
          title="BrainWave-UI/UX"
          description="Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles ."
        />
        <ProjectCard
          src="/image.png"
          title="Spotube"
          description="Modern YouTube Clone Application in React JS with Material UI 5."
        />
      </div>
    </div>
  );
};

export default Projects;
