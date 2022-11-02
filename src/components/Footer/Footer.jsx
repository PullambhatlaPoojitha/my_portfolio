import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>puzitha23@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/poojitha-pullambhatla-ab8538223/"><Linkedin color="#0072b1" size={"3rem"} /></a>
          <a href="https://github.com/PullambhatlaPoojitha"><Gitub color="#171515" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
