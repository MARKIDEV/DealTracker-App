import { ADD_REQUEST } from "../Action/actiontype";
import { DELETE_REQUEST } from "../Action/actiontype";
import { SEARCH_REQUEST } from "../Action/actiontype";

import uuid from "uuid";

const initialstate = {
  requests: [
    {
      id: uuid.v4(),
      name: "Thermo Scientific",
      depart: "France",
      destination: "Tunisie",
      typtrans: "Maritime",
      quant: "520kg",
      typmarch: "dangereuse",
      typequip: "container",
      Validité: "15 novembre 2019"
    },
    {
      id: uuid.v4(),
      name: "Thermo Scientific",
      depart: "France",
      destination: "Tunisie",
      typtrans: "Maritime",
      quant: "520kg",
      typmarch: "dangereuse",
      typequip: "container",
      Validité: "15 novembre 2019"
    }
  ],
  searchReq: ""
};

function requestReducer(state = initialstate, action) {
  switch (action.type) {
    case ADD_REQUEST:
      return {
        ...state,
        requests: state.requests.concat({ ...action.payload, id: uuid.v4() })
      };
    case DELETE_REQUEST:
      return {
        ...state,
        requests: state.requests.filter(el => el.id !== action.payload)
      };

    case SEARCH_REQUEST:
      return {
        ...state,
        searchReq: action.payload
      };
    default:
      return state;
  }
}
export default requestReducer;
