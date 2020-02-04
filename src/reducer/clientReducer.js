import { ADD_CLIENT } from "../Action/actiontype";
import { DELETE_CLIENT } from "../Action/actiontype";

import uuid from "uuid";

const clientState = {
  clients:[
    {
      id: uuid.v4(),
      namecompany: "nnnnnn",
      mail: "hhhhhh@gmail.com",
      pswd: "6852",
      adress: "rue jjjjj tunis",
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

function clientReducer(
  state = clientState,
  action
) {
  switch (action.type) {
    case ADD_CLIENT:
      return {
        ...state,

        transporters: state.clients.concat({ ...action.payload, id: uuid.v4() })
      };
    case DELETE_CLIENT:
      return {
        ...state,

        clients: state.clients.filter(el => el.id !== action.payload)
      }

    
    default:
      return state;
  }
}
export default clientReducer;
