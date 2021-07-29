import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav>
      <FontAwesomeIcon
        className="icon"
        icon={faBars}
        onClick={() => {
          setNavOpen(!navOpen);
        }}
      ></FontAwesomeIcon>
      <ul className={navOpen ? "open" : "closed"}>
        <li>
          <Link
            activeClass="active"
            to="home"
            smooth={true}
            spy={true}
            onClick={() => setNavOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            smooth={true}
            spy={true}
            onClick={() => setNavOpen(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects"
            smooth={true}
            spy={true}
            onClick={() => setNavOpen(false)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            smooth={true}
            spy={true}
            onClick={() => setNavOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
