import axios from "axios";
import { GET_INCOMING_DATA_SUCCESS, GET_INCOMING_DATA_FAILURE } from "./types";
import { defaultUrl } from './config';
import Moment from 'moment';
import { extendMoment } from 'moment-range';


export const getTradeData = (params) => async dispatch => {
  try {
    let defaultSize=25;
    const moment = extendMoment(Moment);
    const start = params ? moment(params.startDate, 'YYYY-MM-DD').format("YYYY-MM-DD") : null;
    const end = params ? moment(params.endDate, 'YYYY-MM-DD').format("YYYY-MM-DD") : null;
    const res = params ?
    await axios.get(`${defaultUrl}byBasic?fromDate=${start}&endDate=${end}`):
    await axios.get(`${defaultUrl}byBasic?size=${defaultSize}`);
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

