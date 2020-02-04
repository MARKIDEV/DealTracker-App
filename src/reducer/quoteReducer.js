import { ADD_QUOTE } from "../Action/actiontype";
import { DELETE_QUOTE } from "../Action/actiontype";
import uuid from "uuid";

const quoteState = {
  
  quotes: []
};

function quoteReducer(
  state = quoteState,
  action
) {
  switch (action.type) {
    case ADD_QUOTE:
      return {
        ...state,

        quotes: state.quotes.concat({ ...action.payload, id: uuid.v4() })
      };
    case DELETE_QUOTE:
      return {
        ...state,

        quotes: state.quotes.filter(el => el.id !== action.payload)
      };

    
    default:
      return state;
  }
}
export default quoteReducer;
