import React from "react";
import "./Footer.css";
import FooterLogo from "../images/itworks-200x200.png";

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
            <h4 className="footer-title">STUFF</h4>
            <ul className="list-unstyled">
              <li>WELL ANOTHER COLUMN</li>
              <li>OTHER STUFF</li>
              <li>ANOTHER GOOD STUFF</li>
            </ul>
          </div>
          {/*Coloumn 3*/}
          <div className="col">
            <img src={FooterLogo} style={{ borderRadius: '5%' }}/>
          </div>
        </div>

        <hr />
        <div className="row">
          <p>
            &copy;{new Date().getFullYear()} Powered by: Bassem Kreidly  | All Rights
            Reserved | Terms of service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
