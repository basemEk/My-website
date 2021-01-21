import React from "react";
import { Button } from "react-bootstrap";
import "./Navbar.css";
import ImgBanner from "../images/resized-cover.jpg";
import Contents from "../Contents/Contents";
import { Link } from "react-router-dom";


function NavbarLanding() {
  return (
    <div>
      <div className="langing-page-banner">
        <img src={ImgBanner} width="100%" />
        <div className="centered">
          <div className="hero">
            <h1 id="h1-customer">Need A Help?</h1>
            <h1 className="h1-h3">Contact a support service</h1>
            <h3 className="h1-h3">
              Our Web developers and IT agents are onse of the best Nurds in the
              local tech community
              <br /> They are standing by to help you
            </h3>
            <br />
            <Link to="/contact">
              <Button className="btn-contact" variant="primary">
                <b>Contact Support</b>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Contents />
      </div>
    </div>
  );
}

export default NavbarLanding;
