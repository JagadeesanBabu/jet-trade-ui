import { getTradeDataByRSI } from "./tradeDataActionsRsi";
import { getTradeData } from "./tradeDataActions";
export const actionCreator = (dateRange, indicatorName=null) => {
    return dispatch => {
        dispatch(getTradeData(dateRange));
        if (indicatorName) {
            dispatch(getTradeDataByRSI(dateRange));
        }
        return Promise.resolve();
    }
}