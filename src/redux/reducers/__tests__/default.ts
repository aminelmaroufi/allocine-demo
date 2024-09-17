import home from '../default';
import ActionTypes from 'src/utils/actionTypes';
import { defaultActions, DefaultState } from 'src/types';

describe('default reducer', () => {
  const initialState: DefaultState = {
    fetching: false,
    message: '',
    error: false,
    success: false,
  };

  it('should return the initial state', () => {
    expect(home(undefined, {} as defaultActions)).toEqual(initialState);
  });

  it('should handle API_CALL_REQUEST', () => {
    const action: any = {
      type: ActionTypes.API_CALL_REQUEST,
    };
    const expectedState: DefaultState = {
      ...initialState,
      fetching: true,
      success: false,
      error: false,
      message: '',
    };
    expect(home(initialState, action)).toEqual(expectedState);
  });

  it('should handle API_CALL_SUCCESS', () => {
    const action: any = {
      type: ActionTypes.API_CALL_SUCCESS,
    };
    const expectedState: DefaultState = {
      ...initialState,
      fetching: false,
      success: true,
    };
    expect(home(initialState, action)).toEqual(expectedState);
  });

  it('should handle API_CALL_FAILURE', () => {
    const action: any = {
      type: ActionTypes.API_CALL_FAILURE,
      payload: {
        message: 'Error occurred',
      },
    };
    const expectedState: DefaultState = {
      ...initialState,
      fetching: false,
      error: true,
      message: 'Error occurred',
    };
    expect(home(initialState, action)).toEqual(expectedState);
  });

  it('should handle SUCCESS_OPERATION', () => {
    const action: any = {
      type: ActionTypes.SUCCESS_OPERATION,
      payload: {
        message: 'Operation successful',
      },
    };
    const expectedState: DefaultState = {
      ...initialState,
      fetching: false,
      success: true,
      message: 'Operation successful',
    };
    expect(home(initialState, action)).toEqual(expectedState);
  });
});
