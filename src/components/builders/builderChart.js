import React from 'react';

import { LineBuilder } from './index';
import { basicDataToLineChart, rsiDataToLineChart } from "../helpers/builderHelpers";



const tradeDataSettings = {
  type: 'line',
  xAxis: 'TradeDate',
  yAxis: 'ClosedPrice',
  period: 'week'
};

const rsiDataSettings = {
  type: 'line',
  xAxis: 'TradeDate',
  yAxis: 'RSI',
  period: 'week'
};


/**
 * depending on the value of the "type" parameter in the settings object converts the data and builds the desired schedule
 * @param {Object} data
 * @returns. {*}
 */
export const buildChart = (data, type) => {
  switch (type) {
    case "BASIC":
      return <LineBuilder data={basicDataToLineChart(data)} settings={tradeDataSettings} />
    case "RSI":
      return <LineBuilder data={rsiDataToLineChart(data)} settings={rsiDataSettings}/>
    case "MACD":
      return <LineBuilder data={basicDataToLineChart(data)} settings={tradeDataSettings} />
  }

};

export default buildChart;