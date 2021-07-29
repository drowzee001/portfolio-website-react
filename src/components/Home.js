import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="home" name="home" className="container">
      <div className="outline">
        <div className="inner"></div>
      </div>
      <div className="content" data-aos="fade">
        <h1>Donovan Rowzee</h1>
        <br />
        <h2>Full-Stack Web Developer</h2>
        <br />
        <div className="linkIcons">
          <a
            className="githubIcon"
            href="https://github.com/drowzee001"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a
            className="linkedinIcon"
            href="https://www.linkedin.com/in/donovan-rowzee-409b94177"
            target="_blank"
          >
            <FontAwesomeIcon className="linkedinIcon" icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className="arrows">
        <FontAwesomeIcon
          id="down1"
          className="down"
          icon={faChevronDown}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          id="down2"
          className="down"
          icon={faChevronDown}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          id="down3"
          className="down"
          icon={faChevronDown}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Home;
