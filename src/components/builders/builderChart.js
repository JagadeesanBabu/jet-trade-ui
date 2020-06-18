import React from 'react';

import { LineBuilder } from './index';
import { dataToLineChart } from '../../helpers';

/**
 * depending on the value of the "type" parameter in the settings object converts the data and builds the desired schedule
 * @param {Object} data
 * @param {Object} settings
 * @returns {*}
 */
const buildChart = (data, settings) => {
  
  const chartData = [dataToLineChart(data, settings)]
  return <LineBuilder data={chartData}/>
      
  };

  export default buildChart;
