// import React from "react";
// import { connect } from "react-redux";
// const mapStateToProps = (state) => {
//   return {
//     requests: state.requests.requests
//   };
// };
// function Req(props) {
//   let request = props.requests.find(el => el.id == props.match.params.id);
//   console.log(request);
  

//   return (
//     <div>
//       <div className="card-text">
//         <div>
//           <h6>Société:</h6>
//         </div>

//         <p className="info">{request.name}</p>
//       </div>
//       <div>
//         <h6> Type de transport: </h6>
//         <p className="info">{request.typtrans}</p>
//       </div>
//       <div>
//         <h6>Départ:</h6>
//         <p className="info">{request.depart}</p>
//       </div>
//       <div>
//         <h6> Destination: </h6>
//         <p className="info">{request.destination}</p>
//       </div>
//       <div>
//         <h6> Dimensions: </h6>
//         <p className="info">{request.quant}</p>
//       </div>
//       <div>
//         <h6> Type de marchandise: </h6>
//         <p className="info">{request.typmarch}</p>
//       </div>
//       <div>
//         <h6> Type d'équipement: </h6>
//         <p className="info">{request.typequip}</p>
//       </div>
//       <div>
//         <h6> Validité: </h6>
//         <p className="info">{request.Validité}</p>
//       </div>
//     </div>
//   );
// }

// // const MapDispatchToProps = dispatch => {
// //   return {

// //     deleteRequest: request => dispatch(deleteRequest(request)),
// //     deleteQuote: quote => dispatch(deleteQuote(quote))
// //   };
// // };
// export default connect(mapStateToProps)(Req);
