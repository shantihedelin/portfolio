import React from "react";
import Image from "next/image";
import RadioPlayerImg from "../images/ProjRadioPlayer.png";
import ToDoImg from "../images/ProjToDo.png";

const ProjectSectionList = () => {
  const projects = [
    {
      title: "Swedish Radio Players",
      description: "Description of the project",
      liveLink: "https://react-radioplayer.vercel.app/",
      Github: "https://github.com/shantihedelin/ReactRadioplayer",
      image: RadioPlayerImg
    },
    {
      title: "Digital To Do List",
      description: "Description of the project",
      liveLink: "https://todo-list-workshop.vercel.app/",
      Github: "https://github.com/shantihedelin/TodoListWorkshop",
      image: ToDoImg
    },
  ];

  const ProjectCard = ({ title, description, liveLink, Github, image }) => (
    <div className=" dark:bg-gray-900 border-solid border-1 shadow-lg rounded-lg overflow-hidden m-5 flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="px-6 py-4">
            <h3 className="text-xl font-semibold mb-2 dark:text-gray-100">
              {title}
            </h3>
            <p className=" dark:text-gray-300 text-base">
              {description}
            </p>
          </div>
          <div className="px-6 py-4">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold hover:underline mr-4"
              >
                Live Site
              </a>
            )}
            {Github && (
              <a
                href={Github}
                target="_blank"
                rel="noopener noreferrer"
                className="	
                text-blue-500 font-semibold hover:underline"
              >
                Code Repository
              </a>
            )}
          </div>
        </div>
        <div className="w-full">
          <Image
            src={image}
            alt={title}
            height="300"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
  

  return projects.map((project, index) => (
    <ProjectCard
      key={index}
      title={project.title}
      description={project.description}
      liveLink={project.liveLink}
      Github={project.Github}
      image = {project.image}
    />
  ));
};

export default ProjectSectionList;
