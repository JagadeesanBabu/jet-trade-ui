import { GET_INCOMING_DATA_SUCCESS, GET_INCOMING_DATA_SUCCESS_RSI, SET_DATE_RANGE_SUCCESS } from "../actions/types";

const initialState = {
  tradeData: [],
  tradeDataRSI:[],
  dateRanges: {},
  dateObjects: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INCOMING_DATA_SUCCESS:
      return {
        ...state,
        tradeData: action.payload,
        dateObjects: action.dateObjects

      };
      case SET_DATE_RANGE_SUCCESS:
        return {
          ...state,
          dateRanges: action.payload
  
        };
      case GET_INCOMING_DATA_SUCCESS_RSI:
        return {
          ...state,
          tradeDataRSI: action.payload,
          dateObjects: action.dateObjects
        };      
    default:
      return state;
  }
}
