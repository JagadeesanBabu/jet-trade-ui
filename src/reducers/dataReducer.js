import { GET_INCOMING_DATA_SUCCESS, GET_INCOMING_DATA_SUCCESS_RSI } from "../actions/types";

const initialState = {
  tradeData: [],
  tradeDataRSI:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INCOMING_DATA_SUCCESS:
      return {
        ...state,
        tradeData: action.payload
      };
      case GET_INCOMING_DATA_SUCCESS_RSI:
        return {
          ...state,
          tradeDataRSI: action.payload
        };      
    default:
      return state;
  }
}
