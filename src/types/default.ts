import actionTypes from "../utils/actionTypes";

export interface DefaultState {
  fetching: boolean;
  message: string;
  error: boolean;
  success: boolean;
}

export interface FetchRequest {
  fetching: boolean;
  success: boolean;
  error: boolean;
  message: string;
}

export interface FetchRequestSuccess {
  fetching: boolean;
  success: boolean;
}

export interface FetchRequestFailure {
  fetching: boolean;
  error: boolean;
  message: string;
}

export interface FetchRequestSuccessOperation {
  fetching: boolean;
  success: boolean;
  message: string;
}

export type FetchRequestPayload = {
  type: typeof actionTypes.API_CALL_REQUEST;
  payload: FetchRequest;
};

export type FetchRequestSuccessPayload = {
  type: typeof actionTypes.API_CALL_SUCCESS;
  payload: FetchRequestSuccess;
};

export type FetchRequestFailurePayload = {
  type: typeof actionTypes.API_CALL_FAILURE;
  payload: FetchRequestFailure;
};

export type FetchRequestSuccessOperationPayload = {
  type: typeof actionTypes.SUCCESS_OPERATION;
  payload: FetchRequestSuccessOperation;
};

export type notActionPayload = {
  type: "";
  payload: null;
};

export type defaultActions =
  | notActionPayload
  | FetchRequestPayload
  | FetchRequestSuccessPayload
  | FetchRequestFailurePayload
  | FetchRequestSuccessOperationPayload;
