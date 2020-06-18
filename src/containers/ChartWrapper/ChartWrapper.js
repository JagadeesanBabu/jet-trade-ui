import React from 'react';
import { buildChart } from '../../components/builders';
import { reformatData } from '../../helpers/builderHelpers';
import './ChartWrapper.scss';

const ChartWrapper = props => {
   const { data, settings } = props;
  return (
    <>
    <h1>Basic Trade Data view</h1>
      {buildChart(data, settings)}
    </>
  );
};

export default ChartWrapper;
