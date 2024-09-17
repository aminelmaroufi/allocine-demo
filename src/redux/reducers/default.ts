import ActionTypes from 'src/utils/actionTypes';
import { defaultActions, DefaultState } from 'src/types';

const initialState: DefaultState = {
  fetching: false,
  message: '',
  error: false,
  success: false,
};
export default function reducer(state = initialState, action: defaultActions) {
  switch (action.type) {
    case ActionTypes.API_CALL_REQUEST:
      return {
        ...state,
        fetching: true,
        success: false,
        error: false,
        message: '',
      };
    case ActionTypes.API_CALL_SUCCESS:
      return {
        ...state,
        fetching: false,
        success: true,
      };
    case ActionTypes.API_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
        error: true,
        message: action.payload.message,
      };
    case ActionTypes.SUCCESS_OPERATION:
      return {
        ...state,
        fetching: false,
        success: true,
        message: action.payload.message,
      };
    default:
      return state;
  }
}
