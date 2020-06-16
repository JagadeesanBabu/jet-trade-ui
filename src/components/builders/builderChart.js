import React from 'react';

import { LineBuilder } from './index';
import { dataToLineChart } from '../../helpers';
import { ResponsiveLine } from '@nivo/line';

/**
 * depending on the value of the "type" parameter in the settings object converts the data and builds the desired schedule
 * @param {Object} data
 * @param {Object} settings
 * @returns {*}
 */
const buildChart = (data, settings) => {
  
  var chartData = dataToLineChart(data, settings);
  
      //return <LineBuilder {...chartData} />;
      return (<ResponsiveLine
        data={chartData}
        margin={{ top: 100, right: 150, bottom: 90, left: 80 }}
        xScale={{
          type: 'point' 
        }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', reverse: false }}
        curve="natural"    
        lineWidth={1}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 3,
          tickRotation: 90,
          legend: 'trade date',
          legendOffset: 80,
          legendPosition: 'middle'
      }}
      axisLeft={{
          orient: 'left',
          tickSize: 16,
          tickPadding: 3,
          tickRotation: 0,
          legend: 'closed price',
          legendOffset: -70,
          legendPosition: 'middle'
      }}
        colors={{ scheme: 'nivo' }}
        pointSize={1}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        />

        );
  };

  export default buildChart;
