import React, { Component } from "react";
import { connect } from "react-redux";
import { searchRequest, deleteQuote, deleteRequest } from "../Action/action";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

// import Searchrequest from "./searchrequest.js";
import uuid from "uuid";

import "./requestfeed.css";

class RequestFeed extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleDone = this.handleDone.bind(this);

    this.state = {
      show: false
    };
  }

  handleDone() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="feed">
        <h2 id="requestfeed">DealTracker Request Feed</h2>
        <Link to="/request">
          <button className="button">
            <a href="#">
              Share <span className="plus"> {"+"} </span>{" "}
            </a>
          </button>
        </Link>

        {this.props.requests.map(el => (
          <div key={el.id} className="Card">
            <div className="card-text">
              <div>
                <h6>Société:</h6>
                <p className="info">{el.name}</p>
              </div>
              <div>
                <h6> Type de transport: </h6>
                <p className="info">{el.typtrans}</p>
              </div>
              <div>
                <h6>Départ:</h6>
                <p className="info">{el.depart}</p>
              </div>
              <div>
                <h6> Destination: </h6>
                <p className="info">{el.destination}</p>
              </div>
              <div>
                <h6> Dimensions: </h6>
                <p className="info">{el.quant}</p>
              </div>
              <div>
                <h6> Type de marchandise: </h6>
                <p className="info">{el.typmarch}</p>
              </div>
              <div>
                <h6> Type d'équipement: </h6>
                <p className="info">{el.typequip}</p>
              </div>
              <div>
                <h6> Validité: </h6>
                <p className="info">{el.Validité}</p>
              </div>
              <button
                  className="add-btn"
                  onClick={() => this.setState({ show: true })}
                >
                  Add quote
                </button>
                <button
                className="btn-remove"
                onClick={() => {
                  this.props.deleteRequest(el.id);
                }}
              >
                X
              </button>
              <div className="modal-container" style={{ height: 200 }}>
                <Modal
                  show={this.state.show}
                  onHide={this.handleHide}
                  container={this}
                  aria-labelledby="contained-modal-title"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">
                      Add a quote from your pc
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span
                          class="input-group-text"
                          id="inputGroupFileAddon01"
                        >
                          Upload
                        </span>
                      </div>
                      <div class="custom-file">
                        <input
                          type="file"
                          class="custom-file-input"
                          id="inputGroupFile01"
                          aria-describedby="inputGroupFileAddon01"
                        />
                        <label class="custom-file-label" for="inputGroupFile01">
                          Choose file
                        </label>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.handleDone}>Done!</Button>
                  </Modal.Footer>
                </Modal>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    requests: state.requests.requests,
    searchReq: state.requests.searchReq,
    quotes: state.quotes
  };
};

const MapDispatchToProps = dispatch => {
  return {
    searchRequest: request => dispatch(searchRequest(request)),
    deleteRequest: request => dispatch(deleteRequest(request)),
    deleteQuote: quote => dispatch(deleteQuote(quote))
  };
};
export default connect(MapStateToProps, MapDispatchToProps)(RequestFeed);
