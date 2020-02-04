import React from "react";

import { Link, Route} from "react-router-dom";
import "./header.css";
import Description from "./description";

export default function Header() {
  return (
    <div>
      <header>
        <div className="App-header">
          <div className="logoAndBtn fixed">
         
            <div className="logoAndSlogan">
            <Link to={`/`}>
              <h1 className="logo">
                <span className="Deal">Deal</span>
                <span className="Tracker">Tracker</span>
              </h1>
              
              <h5 className="slogan">Online plateform for goods shipment</h5>
              </Link>
            </div>
           
            <div className="connexion">
              <button className="btn-header ">
                <a href="#">Admin</a>
              </button>
              <Link to={`/signin-up`}>
                <button className="btn-header ">
                <a href="#">SignIn/Register</a>
              </button>
              </Link>

            </div>
          </div>
          
          </div>
        

         <Route exact path="/" component={Description} />
      </header>
    </div>
  );
}
