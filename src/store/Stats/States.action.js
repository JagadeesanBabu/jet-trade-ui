import * as types from './States.types';

export const getIncomingDataRequest = () => ({
  type: types.GET_INCOMING_DATA_REQUEST

});

export const getIncomingDataSuccess = data => ({
  type: types.GET_INCOMING_DATA_SUCCESS,
  payload: data
});

export const getIncomingDataFailure = error => ({
  type: types.GET_INCOMING_DATA_FAILURE,
  payload: error
});
