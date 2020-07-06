import * as _ from 'lodash';

/**
 * converts entry data to line chart
 * @param {Array} data
 * @returns {Object} data-array and settings for building
 */
export const basicDataToLineChart = (inputData) => {

  let lineDataElements =
    [
      {
        "id": "BANKNIFTY_BASIC",
        "color": "hsl(255, 70%, 50%)",
        "data": [
        ]
      }
    ];

  if (inputData) {
    inputData.map(data => {
      lineDataElements[0].data.push(
        {
          "x": data.tradeDate,
          "y": data.closedPrice
        }

      )
    });
  }
  return lineDataElements;
}

export const rsiDataToLineChart = (inputData) => {

  let lineDataElements =
    [
      {
        "id": "BANKNIFTY_RSI",
        "color": "hsl(230, 70%, 50%)",
        "data": [
        ]
      }
    ]

  if (inputData) {
    inputData.map(data => {
      lineDataElements[0].data.push(
        {
          "x": data.tradeDate,
          "y": data.relativeIndex
        }

      )
    });
  }
  return lineDataElements;
}

