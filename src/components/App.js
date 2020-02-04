import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./header";
import NavMenu from "./navmenu";
import Tuto from "./tuto";
import Carroussel from "./carroussel";
import Request from "./request";
import RequestFeed from "./requestfeed";
import Footer from "./footer";
import SignInUp from "./signinup";
import Admin from "./admin";
import Upload from "./upload";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={NavMenu} />
          <Route path="/admin" component={Admin} />
          <main>
            <Route path="/AddRequest" component={Request} />
            <Route exact path="/" component={Tuto} />
            <Route exact path="/" component={Carroussel} />
            <Route
              exact
              path="/"
              render={() => <RequestFeed req={this.props.requests} />}
            />
            <Route path="/req-answer/:id" render={() => <Upload />} />
            <Route path="/signin-up" render={() => <SignInUp />} />
            <Route path="/request" render={() => <Request />} />
          </main>
          <footer>
            <Route path="/" component={Footer} />
          </footer>
        </div>
      </Router>
    );
  }
}
const MapStateToProps = state => {
  console.log(state.requests);
  return {
    requests: state.requests.requests
  };
};

export default connect(MapStateToProps)(App);
