import React, { useEffect, useState } from "react";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [formSubmit, setFormSubmit] = useState(false);

  const recaptchaRef = React.useRef();

  const onSubmitWithReCAPTCHA = async (e) => {
    e.preventDefault();
    const token = await recaptchaRef.current.executeAsync();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        () => setFormSubmit(true),
        (error) => console.log(error)
      );
  };

  const contactSubmit = (e) => {};
  function onChange(value) {}
  return (
    <div id="contact" name="contact" className="container">
      <form
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        onSubmit={onSubmitWithReCAPTCHA}
        className={formSubmit ? "formHide" : null}
      >
        <h1>Contact Me</h1>
        <div className="contacts">
          <div className="contact">
            <FontAwesomeIcon className="icon" icon={faPhone}></FontAwesomeIcon>
            <p>(619) 594-2684</p>
          </div>
          <div className="contact">
            <FontAwesomeIcon
              className="icon"
              icon={faEnvelopeOpen}
            ></FontAwesomeIcon>
            <p>drowzee001@hotmail.com</p>
          </div>
        </div>
        <input
          type="text"
          name="from_name"
          id="name"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="reply_email"
          id="email"
          placeholder="Email"
          required
        />
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          size={"invisible"}
          badge="inline"
          onChange={onChange}
          id="captcha"
        />
        <textarea name="message" id="message" placeholder="Message" required />
        <button type="submit">Submit</button>
      </form>
      <div className={formSubmit ? "submitted submittedShow" : "submitted"}>
        <h1>Contact Me</h1>
        <div className="contacts">
          <div className="contact">
            <FontAwesomeIcon className="icon" icon={faPhone}></FontAwesomeIcon>
            <p>(619) 594-2684</p>
          </div>
          <div className="contact">
            <FontAwesomeIcon
              className="icon"
              icon={faEnvelopeOpen}
            ></FontAwesomeIcon>
            <p>drowzee001@hotmail.com</p>
          </div>
        </div>
        <h2>Successfully</h2>
        <FontAwesomeIcon
          className="submittedIcon"
          icon={faEnvelope}
        ></FontAwesomeIcon>
        <h2>Submitted!</h2>
      </div>
    </div>
  );
};

export default Contact;
