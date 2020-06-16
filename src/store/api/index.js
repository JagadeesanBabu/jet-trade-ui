 import * as axios from 'axios';
 import { defaultUrl } from './config';

const faker = require('faker');

export const getIncomingData = () => {
  return axios({
    method: 'get',
    //create query by parsing or something else
    url: `${defaultUrl}?size=25`,
    headers: {
      'Content-Type': 'application/json'
    }})};
