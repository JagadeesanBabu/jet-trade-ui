import axios from "axios";
import { GET_INCOMING_DATA_SUCCESS, GET_INCOMING_DATA_FAILURE } from "./types";
import { defaultUrl } from './config';

export const getTradeData = (size=25) => async dispatch => {
  try {
    const res = await axios.get(`${defaultUrl}?size=${size}`);
    dispatch({
        type: GET_INCOMING_DATA_SUCCESS,
        payload: res.data
      });
  } catch (err) {
    dispatch({
      type: GET_INCOMING_DATA_FAILURE,
      payload: err.response.data
    });
  }
};

