import React from "react";
import ProjectCard from "../moleculs/project-card";

export default function Project() {
  return (
    <div id="projects" className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 ">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/assets/NextWebsite.png"
          title="Modern Next js Portfolio"
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aliquam vel iure cum ducimus. Totam?"
          }
        />
        <ProjectCard
          src="/assets/CardImage.png"
          title="Interactive Website Cards"
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aliquam vel iure cum ducimus. Totam?"
          }
        />
        <ProjectCard
          src="/assets/SpaceWebsite.png"
          title="Space Theme Website"
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aliquam vel iure cum ducimus. Totam?"
          }
        />
      </div>
    </div>
  );
}
