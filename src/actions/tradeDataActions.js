import axios from "axios";
import { GET_INCOMING_DATA_SUCCESS, GET_INCOMING_DATA_FAILURE } from "./types";
import { defaultUrl } from './config';

export const getTradeData = (params) => async dispatch => {
  try {
    let defaultSize=25;
    const res = params ?
    await axios.get(`${defaultUrl}?fromDate=${params.startDate}&endDate=${params.endDate}`):
    await axios.get(`${defaultUrl}?size=${defaultSize}`);
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

