import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import dataReducer from "./dataReducer";

export default combineReducers({
  errors: errorReducer,
  tradeData: dataReducer
});
