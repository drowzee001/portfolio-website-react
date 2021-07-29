import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./About.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="about" name="about" className="container">
      <h1 data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" >ABOUT ME</h1>
      <p data-aos="fade-right" data-aos-anchor-placement="bottom-bottom">
        I am a student at San Diego Mesa College studying Web Development and
        expected to receive an Associate of Science in Web Development in
        December 2021. I graduated from San Diego State in May 2020 with a
        Bachelor of Science in Computer Engineering. While attending Mesa this
        last semester, I had the opportunity to develop projects that have
        helped me create a professional portfolio and learn production practices
        such as AGILE.
      </p>
    </div>
  );
};

export default About;
