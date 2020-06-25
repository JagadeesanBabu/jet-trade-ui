import { GET_INCOMING_DATA_FAILURE } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INCOMING_DATA_FAILURE:
      return action.payload;
    default:
      return state;
  }
}
