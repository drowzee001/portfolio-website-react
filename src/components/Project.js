import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "aos/dist/aos.css";
import "./Projects.css";

const Project = ({ project }) => {
  const [flip, setFlip] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: !flip ? 1 : 0,
    transform: `perspective(2000px) rotateX(${!flip ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div
      className="project"
      data-aos="zoom-in"
    >
      <animated.div
        className={!flip ? "front show" : "front hide"}
        style={{
          opacity,
          transform,
          rotateX: "180deg",
        }}
      >
        <h2>{project.name}</h2>
        <div className="img-container">
          <img src={project.img} alt="" />
        </div>
        <p>{project.description}</p>
        <button onClick={() => setFlip(true)}>More Info</button>
      </animated.div>
      <animated.div
        className={flip ? "back show" : "back hide"}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      >
        <div className="lists">
          <div className="skills">
            <h3>Technologies Used</h3>
            <ul>
              {project.technologies.map((technology) => {
                return <li key={technology}>{technology}</li>;
              })}
            </ul>
          </div>
          <div className="challenges">
            <h3>Challenges</h3>
            <ul>
              {project.challenges.map((challenge) => {
                return <li key={challenge}>{challenge}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="buttons">
          <button>
            <a
              href={`https://github.com/drowzee001/${project.extension}-server`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Server GitHub
            </a>
          </button>
          <button>
            <a
              href={`https://github.com/drowzee001/${project.extension}-client`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Client GitHub
            </a>
          </button>
          <button>
            <a
              href={`https://${project.extension}.donovanrowzee.net`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </button>
        </div>
        <button onClick={() => setFlip(false)}>Less Info</button>
      </animated.div>
    </div>
  );
};

export default Project;
