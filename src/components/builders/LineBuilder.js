import React from 'react';
import { ResponsiveLine } from '@nivo/line'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ( {data /* see data tab */, settings=null }) => {
    const xAxis = settings ? settings.xAxis : 'TradeDate';
    const yAxis = settings ? settings.yAxis : 'ClosedPrice';

    return (<ResponsiveLine
        data={data}
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
          legend: xAxis,
          legendOffset: 80,
          legendPosition: 'middle'
      }}
      axisLeft={{
          orient: 'left',
          tickSize: 16,
          tickPadding: 3,
          tickRotation: 0,
          legend: yAxis,
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

    }
export default MyResponsiveLine;