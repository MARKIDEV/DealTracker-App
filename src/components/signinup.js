import React, { Component } from "react";
import "mdbreact/dist/css/mdb.css";
import "./signinup.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBInput
} from "mdbreact";

export default class SignInUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      namecompany: "",
      mail: "",
      pswd: "",
      adress: "",
      phone: "",
      dealer_identity: "",
      isActive: false,
      clients: [
        {
          namecompany: "WorldTrading",
          mail: "belhouchet.ikram@gmail.com",
          pswd: "ferrrr5",
          adress: "aouina Tunis",
          phone: "50866699",
          dealer_identity: "Client"
        },
        {
          logo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNC8PFilvxBfZ5zcUVss7TqRFRE8grbM2PPNL37oSnHIi6IWUi&s",
          name: "CMA",
          depart: "Italie",
          destination: "Tunisie",
          typtrans: "Maritime",
          quant: "8520kg",
          typmarch: "fragile",
          typequip: "remorque",
          Validité: "15 novembre 2019"
        }
      ]
    };
  }
  onChangeDealerIdentity = e => {
    this.setState({
      dealer_identity: e.target.value
    });
  };
  ToggleMenu = () => {
    this.setState({
      isActive: !this.state.isActive
    });
    console.log(this.state.isActive);
  };
  handelChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  Registred = cl => {
    this.setState({
      clients: this.state.clients.concat(cl)
    });
  };

  render() {
    return (
      <div className="signin">
        <div
          style={{ display: this.state.isActive === true ? "flex" : "none" }}
        >
          <div className="are-not-dealer">
            <h3 className="white-text  font-weight-bold">
              <strong>Register to Explore DealTracker !</strong>
              <br />
              <a
                onClick={this.ToggleMenu}
                href="#"
                className="blue-text font-weight-bold"
              >
                <strong> Sign Up</strong>
              </a>
            </h3>
          </div>
        </div>
        <MDBContainer
          id="#register"
          style={{ display: this.state.isActive === true ? "none" : "flex" }}
        >
          <MDBRow>
            <MDBCol md="6">
              <MDBCard
                className="card-image"
                style={{
                  backgroundImage:
                    "url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)",
                  width: "28rem",
                  backgroundSize: "cover"
                }}
              >
                <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                  <div className="text-center">
                    <h3 className="white-text mb-5 mt-4 font-weight-bold">
                      <strong>SIGN</strong>
                      <a href="#" className="blue-text font-weight-bold">
                        <strong> UP</strong>
                      </a>
                    </h3>
                  </div>
                  <MDBInput
                    label="Company Name"
                    group
                    type="text"
                    validate
                    labelClass="white-text"
                    name="namecompany"
                    required
                    value={this.state.namecompany}
                    onChange={this.handelChange}
                  />
                  <MDBInput
                    label="Your Mail"
                    group
                    type="email"
                    validate
                    labelClass="white-text"
                    name="mail"
                    required
                    value={this.state.mail}
                    onChange={this.handelChange}
                  />
                  <MDBInput
                    label="Enter a password"
                    group
                    type="password"
                    validate
                    labelClass="white-text"
                    name="pswd"
                    required
                    value={this.state.pswd}
                    onChange={this.handelChange}
                  />
                  <MDBInput
                    label="Adress"
                    group
                    type="text"
                    validate
                    labelClass="white-text"
                    name="adress"
                    required
                    value={this.state.adress}
                    onChange={this.handelChange}
                  />
                  <MDBInput
                    label="Phone number"
                    group
                    type="number"
                    validate
                    labelClass="white-text"
                    name="phone"
                    required
                    value={this.state.phone}
                    onChange={this.handelChange}
                  />

                  <MDBInput
                    label="Transporter"
                    group
                    type="radio"
                    validate
                    labelClass="white-text"
                    name="serviceOptions"
                    id="Transporter"
                    value="Transporter"
                    checked={this.state.dealer_identity === "Transporter"}
                    onChange={this.onChangeDealerIdentity}
                  />

                  <MDBInput
                    label="Client"
                    group
                    type="radio"
                    validate
                    labelClass="white-text"
                    name="serviceOptions"
                    id="Client"
                    value="Client"
                    checked={this.state.dealer_identity === "Client"}
                    onChange={this.onChangeDealerIdentity}
                  />

                  <hr />
                  <div className="md-form pb-3">
                    <MDBInput
                      label={
                        <>
                          Accept the
                          <a href="#!" className="orange-text font-weight-bold">
                            Terms and Conditions
                          </a>
                        </>
                      }
                      type="checkbox"
                      id="checkbox1"
                      labelClass="white-text"
                      checked
                    />
                  </div>
                  <MDBRow className="d-flex align-items-center mb-4">
                    <div className="text-center mb-3 col-md-12">
                      <MDBBtn
                        onClick={() => {
                          this.Registred({
                            namecompany: this.state.namecompany,
                            mail: this.state.mail,
                            pswd: this.state.pswd,
                            adress: this.state.adress,
                            phone: this.state.phone,
                            dealer_identity: this.state.dealer_identity
                          });
                          console.log("registred");
                          this.setState({
                            namecompany: "",
                            mail: "",
                            pswd: "",
                            adress: "",
                            phone: "",
                            dealer_identity: ""
                          });
                        }}
                        color="success"
                        rounded
                        type="submit"
                        className="btn-block z-depth-1"
                      >
                        Sign in
                      </MDBBtn>
                    </div>
                  </MDBRow>
                  <MDBCol md="12">
                    <p className="font-small white-text d-flex justify-content-end">
                      Have an account?
                      <a
                        href="#signin"
                        className="orange-text ml-1 font-weight-bold"
                      >
                        Log in
                      </a>
                    </p>
                  </MDBCol>
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div
          style={{ display: this.state.isActive === true ? "none" : "flex" }}
        >
          <div className="are-dealer">
            <h3 className="white-text  font-weight-bold">
              <strong>You are already a Dealer !</strong>
              <br />
              <a
                onClick={this.ToggleMenu}
                href="#!"
                className="blue-text font-weight-bold"
              >
                <strong> Sign In</strong>
              </a>
            </h3>
          </div>
        </div>
        <div className={this.state.isActive === true ? "signupin" : "No-In"}>
          <MDBContainer id="#signin">
            <MDBRow>
              <MDBCol md="6">
                <MDBCard
                  className="card-image"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
                    width: "400px",
                    backgroundSize: "cover"
                  }}
                >
                  <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                    <div className="text-center">
                      <h3 className="white-text mb-5 mt-4 font-weight-bold">
                        <strong>SIGN</strong>
                        <a href="#!" className="blue-text font-weight-bold">
                          <strong> IN</strong>
                        </a>
                      </h3>
                    </div>

                    <MDBInput
                      label="Your Mail"
                      group
                      type="email"
                      validate
                      labelClass="white-text"
                    />
                    <MDBInput
                      label="Enter a password"
                      group
                      type="password"
                      validate
                      labelClass="white-text"
                    />
                    <MDBInput
                      label="Admin"
                      group
                      type="radio"
                      validate
                      labelClass="white-text"
                    />
                    <MDBInput
                      label="Transporter"
                      group
                      type="radio"
                      validate
                      labelClass="white-text"
                    />
                    <MDBInput
                      label="Client"
                      group
                      type="radio"
                      validate
                      labelClass="white-text"
                    />
                    <hr />
                    <div className="md-form pb-3">
                      <MDBInput
                        label={
                          <>
                            Accept the&nbsp;
                            <a
                              href="#!"
                              className="green-text font-weight-bold"
                            >
                              Terms and Conditions
                            </a>
                          </>
                        }
                        type="checkbox"
                        id="checkbox1"
                        labelClass="white-text"
                      />
                    </div>
                    <MDBRow className="d-flex align-items-center mb-4">
                      <div className="text-center mb-3 col-md-12">
                        <MDBBtn
                          color="success"
                          rounded
                          type="button"
                          className="btn-block z-depth-1"
                        >
                          Sign in
                        </MDBBtn>
                      </div>
                    </MDBRow>
                    <MDBCol md="12">
                      <p className="font-small white-text d-flex justify-content-end">
                        Don't you have an account yet ?
                        <a
                          href="#register"
                          className="blue-text ml-1 font-weight-bold"
                        >
                          Register
                        </a>
                      </p>
                    </MDBCol>
                  </div>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    );
  }
}
