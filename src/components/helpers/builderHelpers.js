import * as _ from 'lodash';

/**
 * converts entry data to line chart
 * @param {Array} data
 * @returns {Object} data-array and settings for building
 */
export const dataToLineChart = (inputData) => {
  
  const [lineDataFirstElement] =
    [
      {
        "id": "BANKNIFTY",
        "data": [
        ]
      }
    ]

  if (typeof(inputData.tradeData)!=="undefined") {

  inputData.tradeData.map(data => {
    lineDataFirstElement.data.push(
      {
        "x": data.tradeDate,
        "y": data.closedPrice
      }

    )
  }
  )
}
  return lineDataFirstElement;
};