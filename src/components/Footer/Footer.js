import React from "react";
import "./Footer.css";
import FooterLogo from "../images/itworks-200x200.png";
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row-1">
          {/*Coloumn 1*/}
          <div className="col">
            <h4 className="footer-title">THICC MEMES INC</h4>
            <ul className="list-unstyled">
              <li>Tel: +123-456-789</li>
              <li>Baabda, Lebanon</li>
              <li>123 Street South East</li>
            </ul>
          </div>
          {/*Coloumn 2*/}
          <div className="ccl">
            <h4 className="footer-title">STUFF</h4>
            <ul className="list-unstyled">
              <li>DANK MEMEs</li>
              <li>OTHER STUFF</li>
              <li>ANOTHER GOOD STUFF</li>
            </ul>
          </div>
          {/*Coloumn 3*/}
          <div className="col">
            <h4 className="footer-title">ANOTHER STUFF</h4>
            <ul className="list-unstyled">
              <li>WELL ANOTHER COLUMN</li>
              <li>OTHER STUFF</li>
              <li>ANOTHER GOOD STUFF</li>
            </ul>
          </div>
          {/*Coloumn 3*/}
          <div className="col">
            <img
              src={FooterLogo}
              alt="footer-logo"
              style={{ borderRadius: "5%" }}
            />
          </div>
        </div>
        <IconContext.Provider value={{ size: "1.3em" }}>
          <div>
            <ul className="icons-row">
              <li>
              <a href="https://www.facebook.com/">
                <FaFacebook color="3B5998" />
                </a>
              </li>
              <li>
              <a href="https://www.instagram.com/">
                <FaInstagram color="#DD2A7B" />
                </a>
              </li>

              <li>
                <a href="https://github.com/basemEk">
                  <FaGithub color='grey' />
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/bassem-kreidly-6a900319a/">
                  <FaLinkedin color="#0077b5" />
                </a>
              </li>
              
              <br />
              <li>Follow Us on Social Media</li>
            </ul>
          </div>
        </IconContext.Provider>

        <hr />
        <div className="row">
          <p className="copy-right">
            &copy;{new Date().getFullYear()} Powered by: Bassem Kreidly | All
            Rights Reserved | Terms of service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
