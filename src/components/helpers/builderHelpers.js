import * as _ from 'lodash';

/**
 * converts entry data to line chart
 * @param {Array} data
 * @returns {Object} data-array and settings for building
 */
export const dataToLineChart = (inputData) => {

  const lineDataElements =
    [
      {
        "id": "BANKNIFTY_BASIC",
        "color": "hsl(255, 70%, 50%)",
        "data": [
        ]
      },
      {
        "id": "BANKNIFTY_RSI",
        "color": "hsl(230, 70%, 50%)",
        "data": [
        ]
      }
    ]


  inputData.tradeData.map(data => {
    lineDataElements[0].data.push(
      {
        "x": data.tradeDate,
        "y": data.closedPrice
      }

    )
  }
  )
  if (inputData.tradeDataRSI) {
    inputData.tradeDataRSI.map(data => {
      lineDataElements[1].data.push(
        {
          "x": data.tradeDate,
          "y": data.relativeIndex
        }

      )
    })
  }
  return lineDataElements;
}

