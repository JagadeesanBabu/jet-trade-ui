import { getTradeDataByRSI } from "./tradeDataActionsRsi";
import { getTradeData } from "./tradeDataActions";

export const actionCreator = (dateRange, activeIndicators = null) => {
    return dispatch => {
        dispatch(getTradeData(dateRange));

        if (activeIndicators) {
            activeIndicators.map(activeIndicator => {
                if ('RSI' === activeIndicator.id) {
                    dispatch(getTradeDataByRSI(dateRange));
                }
            });
        }
        return Promise.resolve();
    }
}
