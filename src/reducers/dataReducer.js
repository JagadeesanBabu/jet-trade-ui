import { GET_INCOMING_DATA_SUCCESS } from "../actions/types";

const initialState = {
  tradeData: [],
  trade: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INCOMING_DATA_SUCCESS:
      return {
        ...state,
        tradeData: action.payload
      };
    default:
      return state;
  }
}
