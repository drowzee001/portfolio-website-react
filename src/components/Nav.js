import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  return (
    <nav>
      <FontAwesomeIcon
        className="icon"
        icon={faBars}
        onClick={() => {
          if (navOpen === true) {
            setClosing(true);
            setTimeout(() => setClosing(false), 2500);
          }
          setNavOpen(!navOpen);
        }}
      ></FontAwesomeIcon>
      <div
        id="mobile-background"
        className={
          navOpen ? "icon opening" : `icon ${closing ? "closing" : null}`
        }
      ></div>
      <ul className={navOpen ? "open opening" : "closed"}>
        <li>
          <Link
            activeClass="active"
            to="home"
            smooth={true}
            spy={true}
            onClick={() => {
              console.log(navOpen)
              if (navOpen === true) {
                setClosing(true);
                setTimeout(() => setClosing(false), 2500);
                setNavOpen(!navOpen);
              }
            }}
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
            onClick={() => {
              if (navOpen === true) {
                setClosing(true);
                setTimeout(() => setClosing(false), 2500);
                setNavOpen(!navOpen);
              }
            }}
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
            onClick={() => {
              if (navOpen === true) {
                setClosing(true);
                setTimeout(() => setClosing(false), 2500);
                setNavOpen(!navOpen);
              }
            }}
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
            onClick={() => {
              if (navOpen === true) {
                setClosing(true);
                setTimeout(() => setClosing(false), 2500);
                setNavOpen(!navOpen);
              }
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
