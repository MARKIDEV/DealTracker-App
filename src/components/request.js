import React, { Component } from "react";
import { connect } from "react-redux";
import { addRequest } from "../Action/action";
import './request.css';

class Request extends Component {
  constructor(props) {
    super(props);
    this.shared = this.shared.bind(this);
    this.state = {
      name: "",
      depart: "",
      destination: "",
      typtrans: "",
      dimensions: "",
      typmarch:"",
      typequip:"",
      valid:"" 
     
    };
  }
  

  shared=() =>{
    alert('Shared with success');
  }

  handelChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
 
  render() {
    return (
        <div className="request">
            <h2 className="create">~Please fill in this form below to share your quote request to our DealTracker Request Feed~</h2>
            <div className="form">
            <div className="input-group-prepend">
                   <span className="input-group-text" >Nom de la société</span>
              <input
               className="form-input"
               placeholder="Nom de la société"
               name="name"
               value={this.state.name}
               onChange={this.handelChange}
        />
        </div>
        
        <div className="input-group-prepend">
                   <span className="input-group-text" >Départ</span>
             
        <input
          className="form-input"
          placeholder="Départ"
          name="depart"
          value={this.state.depart}
          onChange={this.handelChange}
        />
        </div>
        <div className="input-group-prepend">
                   <span className="input-group-text" >Destination</span>
        <input
          className="form-input"
          placeholder="Destination"
          name="destination"
          value={this.state.destination}
          onChange={this.handelChange}
        />
        </div>
        <div className="input-group-prepend">
                   <span className="input-group-text" >Type de transport</span>
                   <select  className="form-input"
                            placeholder="Type de transport"
                            name="typtrans"
                            onChange={this.handelChange}>
                        <option>choisir le type </option>
                        <option value={this.state.typtrans}>Maritime</option>
                        <option value={this.state.typtrans}>Aérien</option>
                        <option value={this.state.typtrans}>Terrestre</option>
 
                    </select> 
        
        </div>
        <div className="input-group-prepend">
                   <span className="input-group-text" >Quantité / Volume</span>
        
        <input
          className="form-input"
          placeholder="Dimensions"
          name="dimensions"
          value={this.state.dimensions}
          onChange={this.handelChange}
        />
        </div>
        <div className="input-group-prepend">
                   <span className="input-group-text" >Type de marchandise</span>
        
        <input
          className="form-input"
          placeholder="Type de marchandise"
          name="typmarch"
          value={this.state.typmarch}
          onChange={this.handelChange}
        />
        </div>
        <div className="input-group-prepend">
                   <span className="input-group-text" >Type d'équipement</span>
        
        <input
          className="form-input"
          placeholder="Type d'équipement"
          name="typequip"
          value={this.state.typequip}
          onChange={this.handelChange}
        />
        </div>
        <div className="input-group-prepend">
                   <span className="input-group-text" >Validité de la demande</span>
        
        <input
          className="form-input"
          placeholder="Avant quelle date"
          name="valid"
          value={this.state.valid}
          onChange={this.handelChange}
        />
        </div>
       
        <button
          className="share-button new"
          type="submit"
          onClick={() => {
            this.shared();
          
            this.props.addRequest({
              name: this.state.name,
              depart: this.state.depart,
              destination: this.state.destination,
              typtrans:this.state.typtrans,
              dimensions: this.state.dimensions,
              typmarch: this.state.typmarch,
              typequip: this.state.typequip,
              valid: this.state.valid 
            });
            console.log(this.props.requests);
            this.setState({
              name: "",
              depart: "",
              destination: "",
              typtrans: "",
              dimensions: "",
              typmarch:"",
              typequip:"",
              valid:""  
            });
          }}
        >
          Save and share to Request Feed 

        </button>
      </div>
      </div>
    );
  }
}
const MapStateToProps = state => {
  return { requests: state.requests };
};
const MapDispatchToProps = dispatch => ({
  addRequest: el => dispatch(addRequest(el))
});
export default connect( MapStateToProps,
  MapDispatchToProps)(Request);
