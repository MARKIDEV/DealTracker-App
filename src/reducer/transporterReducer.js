import { ADD_TRANSPORTER } from "../Action/actiontype";
import { DELETE_TRANSPORTER } from "../Action/actiontype";

import uuid from "uuid";

const transporterState = {
  transporters: [
    {
      id: uuid.v4(),
      namecompany: "joli",
      mail: "ggghtg@gmail.com",
      pswd: "6852",
      adress: "rue mali tunis",
      phone: "4444444444"
    },
    {
    id: uuid.v4(),
      namecompany: "joli",
      mail: "ggghtg@gmail.com",
      pswd: "6852",
      adress: "rue mali tunis",
      phone: "4444444444"
    }
      ,
     {
        id: uuid.v4(),
      namecompany: "bbbbbb",
      mail: "gpppgghtg@gmail.com",
      pswd: "6852",
      adress: "rue mali tunis",
      phone: "555555555544444"
    }
  ]
  
};

function transporterReducer(
  state = transporterState,
  action
) {
  switch (action.type) {
    case ADD_TRANSPORTER:
      return {
        ...state,

        transporters: state.transporters.concat({ ...action.payload, id: uuid.v4() })
      };
    case DELETE_TRANSPORTER:
      return {
        ...state,

        transporters: state.transporterss.filter(el => el.id !== action.payload)
      }

    
    default:
      return state;
  }
}
export default transporterReducer;
