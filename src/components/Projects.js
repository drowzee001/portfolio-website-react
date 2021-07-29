import React, { useState } from "react";
import "./Projects.css";
import destinationFinder from "../assets/destination-finder.jpg";
import bookstore from "../assets/bookstore.jpg";
import Project from "./Project";
import messenger from "../assets/messenger.jpg";
const Projects = () => {
  const projects = [
    {
      name: "Messaging Web App",
      description:
        "MERN Application that allows users to register, login, and send messages. Utilizes React Redux.",
      img: messenger,
      technologies: [
        "React Redux",
        "React Bootstrap",
        "React Router",
        "Bcrypt.js",
      ],
      challenges: [
        "Maximizing MongoDB access efficiency",
        "Managing front-end auth state",
        "Joining database collections such as conversation and users data",
      ],
      extension: "messaging-web-app",
    },
    {
      name: "Destination Finder",
      description:
        "MERN application that allows users to find points of interests in cities. Powered by Google's Places API to provide auto-complete and location data. Utilizes React Redux.",
      img: destinationFinder,
      technologies: [
        "React Redux",
        "React Router",
        "Reactstrap",
        "Google Places API",
        "Bcrypt.js",
      ],
      challenges: [
        "Learning how to integrate Google's API using JavaScript",
        "Learning how maximize to API request efficiency",
      ],
      extension: "destination-finder",
    },
    {
      name: "Bookstore Web App",
      description:
        "MEAN Application that allows users to search books and create orders. Functions included creating, editing, and deleting of books and orders.",
      img: bookstore,
      technologies: ["Angular", "TypeScript", "HTML/CSS", "Bcrypt.js"],
      challenges: [
        "Learning the Angular Framework and TypeScript",
        "Implementing pagination for the first time",
        "Learning how to make more complex MongoDB Schemas",
      ],
      extension: "bookstore",
    },
  ];

  return (
    <div id="projects" name="projects" className="container">
      {projects.map((project) => {
        return <Project key={project.name} project={project}></Project>;
      })}
    </div>
  );
};

export default Projects;
