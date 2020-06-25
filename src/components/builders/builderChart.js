import React from 'react';

import { LineBuilder } from './index';
import { dataToLineChart } from "../helpers/builderHelpers";

/**
 * depending on the value of the "type" parameter in the settings object converts the data and builds the desired schedule
 * @param {Object} data
 * @returns {*}
 */
export const buildChart = (data) => {
  
  const chartData = [dataToLineChart(data)]
  return <LineBuilder data={chartData}/>
      
  };

export default buildChart;
