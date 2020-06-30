import axios from "axios";
import { GET_INCOMING_DATA_FAILURE, GET_INCOMING_DATA_SUCCESS_RSI } from "./types";
import { defaultUrl } from './config';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

export const getTradeDataByRSI = (params) => async dispatch => {
  try {
    let defaultSize=25;
    const moment = extendMoment(Moment);
    const start = params && params.startDate ? moment(params.startDate, 'YYYY-MM-DD').format("YYYY-MM-DD") : null;
    const end = params && params.endDate ? moment(params.endDate, 'YYYY-MM-DD').format("YYYY-MM-DD") : null;
    
    const res = start && end ?
    await axios.get(`${defaultUrl}byRelativeStrength?fromDate=${start}&endDate=${end}`):
    await axios.get(`${defaultUrl}byRelativeStrength?size=${defaultSize}`);
    dispatch({
        type: GET_INCOMING_DATA_SUCCESS_RSI,
        payload: res.data,
        dateObjects: {
          startDate: start,
          endDate: end
        }
      });
  } catch (err) {
    dispatch({
      type: GET_INCOMING_DATA_FAILURE,
      payload: err.response.data
    });
  }
};

