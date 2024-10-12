"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Event Website",
    description: "MERN Stack Project with RESTFUL API",
    image: "/images/projects/Event-website.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nhannguyenus24/Event-Website"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "NextJs Project",
    image: "/images/projects/Portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Nhannguyenus24/Portfolio"
  },
  {
    id: 3,
    title: "Proxy Server",
    description: "Simple Python Proxy between Browser and Server",
    image: "/images/projects/Proxy.png",
    tag: ["All", "Window app"],
    gitUrl: "https://github.com/Nhannguyenus24/Website-proxy"
  },
  {
    id: 4,
    title: "SVG Drawer",
    description: "SVG Reader file and Drawing Window app",
    image: "/images/projects/SVG.jpg",
    tag: ["All", "Window app"],
    gitUrl: "https://github.com/Nhannguyenus24/SVG-Reader"
  },
  {
    id: 5,
    title: "Pikachu Onet Game",
    description: "Simple onet Window app ",
    image: "/images/projects/Pikachu.png",
    tag: ["All", "Window app"],
    gitUrl: "https://github.com/Nhannguyenus24/HCMUS-Onet-Game-Project"
  }];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Window app"
          isSelected={tag === "Window app"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
