import axios from "axios";
import { SET_DATE_RANGE_SUCCESS } from "./types";
import { defaultUrl } from './config';
import Moment from 'moment';
import { extendMoment } from 'moment-range';


export const setDateRange = (startDate, endDate) => async dispatch => {
    const moment = extendMoment(Moment);
    const start =  startDate ? moment(startDate, 'YYYY-MM-DD').format("YYYY-MM-DD") : null;
    const end = endDate ? moment(endDate, 'YYYY-MM-DD').format("YYYY-MM-DD") : null;
    dispatch({
        type: SET_DATE_RANGE_SUCCESS,
        payload: {
            endDate: end,
            startDate: start
        }
      });
  };

