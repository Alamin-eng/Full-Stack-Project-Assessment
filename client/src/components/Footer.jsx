import React from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
  
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(){
    return (
      <footer className="footer text-center">
        <hr style={{ width: "100%", color: "white" }}></hr>
        <div className="footer-icon">
          <a
            href="mailto:mohammedalaminruben@gmail.com?subject = Feedback&body = Message"
            target={"blank"}
          >
            <FontAwesomeIcon
              className="fontawe text-danger"
              icon={faInstagram}
            />
          </a>
          <a href="https://github.com/Alamin-eng" target={"blank"}>
            <FontAwesomeIcon className="fontawe text-white" icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-alamin-846376220/"
            target={"blank"}
          >
            <FontAwesomeIcon className="fontawe text-info" icon={faLinkedin} />
          </a>
          <a
            href="mailto:mohammedalaminruben@gmail.com?subject = Feedback&body = Message"
            target={"blank"}
          >
            <FontAwesomeIcon
              className="fontawe text-warning"
              icon={faEnvelope}
            />
          </a>
          <a
            href="mailto:mohammedalaminruben@gmail.com?subject = Feedback&body = Message"
            target={"blank"}
          >
            <FontAwesomeIcon
              className="fontawe text-primary"
              icon={faFacebook}
            />
          </a>
        </div>
        <p style={{fontSize:'.75em'}}> Cyf Fullstack Project <br></br> Made With Love &copy; Mohammad Alamin 2022</p>
      </footer>
    );
}
export default Footer;