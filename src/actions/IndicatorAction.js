import { SET_ACTIVE_INDICATORS } from "./types";

export const setActiveIndicators = (activeIndicators) => async dispatch =>{

    dispatch({
        type: SET_ACTIVE_INDICATORS,
        payload: {
            activeIndicators: activeIndicators
        }
      });
}