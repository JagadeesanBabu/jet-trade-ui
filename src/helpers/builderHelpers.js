import * as _ from 'lodash';
import { formatDate } from './timeHelpers';

/**
 * converts an array-like object to a flat array without nesting
 * @param {Object} data
 * @returns {Array}
 */
export const createFlatArray = data => {
  const flatArray = [];
  const dataKeys = Object.keys(data);
  dataKeys.forEach(objKey => flatArray.push(...data[objKey]));
  return flatArray;
};

/**
 * converts each element of the array and casts the dates to the desired format using the formatDate function
 * @param {Array} array
 * @returns {Array}
 */
export const formatDateInData = array =>
  array.map(item => ({ ...item, tradeDate: formatDate(item.tradeDate) }));


/**
 * brings the input data to the form necessary for work, sequentially passing the input data through the helpers functions
 * @param {Object} data
 * @returns {Array}
 */
export const reformatData = data => formatDateInData(createFlatArray(data));


/**
 * converts entry data to line chart
 * @param {Array} data
 * @param {Object} settings
 * @returns {Object} data-array and settings for building
 */
export const dataToLineChart = (inputData, settings) => {
  const { yAxis = '' } = settings;
  let { xAxis = '' } = settings;
  var data = [
    {
      "id": "BANKNIFTY",
      "data": [
      
      ]
    }
  ];
  var i;
  
  for (i = 0; i < 25; i++) {
    if(typeof(inputData.data)!=="undefined")
    {
      data[0].data.push(
          {
            "x": inputData.data[i].tradeDate,
            "y": inputData.data[i].closedPrice
          }
      
      )
        }
  };
  return data;
};