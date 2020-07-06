import { GET_INCOMING_DATA_SUCCESS, GET_INCOMING_DATA_SUCCESS_RSI, SET_DATE_RANGE_SUCCESS, SET_ACTIVE_INDICATORS } from "../actions/types";

const initialState = {
  tradeData: [],
  tradeDataRSI:[],
  dateRanges: {},
  activeIndicators:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INCOMING_DATA_SUCCESS:
      return {
        ...state,
        tradeData: action.payload
      };
      case SET_DATE_RANGE_SUCCESS:
        return {
          ...state,
          dateRanges: action.payload
  
        };
      case GET_INCOMING_DATA_SUCCESS_RSI:
        return {
          ...state,
          tradeDataRSI: action.payload
        };      
      case SET_ACTIVE_INDICATORS:
          return {
            ...state,
            activeIndicators: action.payload
          };      
    default:
      return state;
  }
}
