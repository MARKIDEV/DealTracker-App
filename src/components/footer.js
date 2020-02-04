import React from "react";
import {Link} from "react-router-dom";
import ('./footer.css')

const Footer = () => {
  return (
    <div className="footer" >
        <div className="logoAndSlogan">
            <Link to={`/`}>
              <h1 className="logo">
                <span className="Deal">Deal</span>
                <span className="Tracker">Tracker</span>
              </h1>
              
              <h5 className="slogan">Online plateform for goods shipment</h5>
              </Link>
            </div>
      <small >
        <p>
          Web App plateform for quotes Request  online:
          <div>
           <div>
          <a href={"/"} >
            Description
          </a>
          <a href={"/request"} >
            Create new request
          </a>
          </div>
          <div>
          <a href={"/signin-up"} >
            Login/Register
          </a>
          
          <a href={"#"} >
            Need for Help! contact our Virtual Guide
          </a>
          </div>
          </div>
          
        </p>
        <p>
         
          
          www.DealTracker.com © 2019
          Made by <span className="markidev">MARKIDEV</span>
        </p>
      </small>
    </div>
  );
};

export default Footer;
