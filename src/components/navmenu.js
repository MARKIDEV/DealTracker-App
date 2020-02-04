import React from "react";

import "./navmenu.css";

const NavMenu = () => {
  return (
    <div>
      <div class="wrap">
        <a className="link-item" href="/client">
          <div>
            <h1 className="nav-items">CLIENT Dealer</h1>
          </div>
        </a>
        <a className="link-item" href="/forwarder">
          <div>
            <h1 className="nav-items">FORWARDER Dealer</h1>
          </div>
        </a>
        <a className="link-item" href="#tuto">
          <div>
            <h1 className="nav-items">
              Why you should use
              <br /> DealTracker
            </h1>
          </div>
        </a>
        <a className="link-item" href="/request">
          <div>
            <h1 className="nav-items">
              Create <br />
              your personnalized
              <br /> REQUEST
            </h1>
          </div>
        </a>
        <a className="link-item" href="#requestfeed">
          <div>
            <h1 className="nav-center">Request RealTime Feed</h1>
          </div>
        </a>
      </div>
    </div>
  );
};
export default NavMenu;
