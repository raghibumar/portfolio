import React from 'react';
import { links } from '../portfolio';
import { SocialIcon } from 'react-social-icons';
import Fade from 'react-reveal/Fade';
import "./contact.css"

const Contact = () => {
    return (
      <div className="contact" id="contact">
        <h1 className="contact-title">
          <Fade bottom cascade duration={2500}>
            Reach Out To Me!
          </Fade>
        </h1>
        <div className="icon">
          {links.map((link) => (
            <div className="icons">
              {" "}
              <SocialIcon url={link} target="_blank" />{" "}
            </div>
          ))}
        </div>
        <center>
          <hr className="style-f" />
        </center>
        <p className="copyright">
          Socializing and Connecting is really important, which leads to great
          ideas and major breakthroughs. <br />
          You can contact me at the places mentioned above or You can connect me
          at <b>raghibumar2@gmail.com</b> or You can call me at{" "}
          <b>+91 7542904942</b>
        </p>
      </div>
    );
}

export default Contact