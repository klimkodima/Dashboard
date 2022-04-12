import { CurrencyType } from "../../types";

export const SET_CURRENCY = "currencyActionTypes/SET_CURRENCY";
export interface SetCurrencyAction {
  type: typeof SET_CURRENCY;
  currency: CurrencyType;
}

export const GET_CURRENCY = "currencyActionTypes/GET_CURRENCY";
export interface GetCurrencyAction {
  type: typeof GET_CURRENCY;
}

export const GET_CURRENCY_REQUEST = "currencyActionTypes/GET_CURRENCY_REQUEST";
export interface GetCurrencyRequestAction {
  type: typeof GET_CURRENCY_REQUEST;
}

export const GET_CURRENCY_SUCCESS = "currencyActionTypes/GET_CURRENCY_SUCCESS";
export interface GetCurrencySuccessAction {
  type: typeof GET_CURRENCY_SUCCESS;
  currency: CurrencyType;
}

export const GET_CURRENCY_FAILURE = "currencyActionTypes/GET_CURRENCY_FAILURE";
export interface GetCurrencyFailureAction {
  type: typeof GET_CURRENCY_FAILURE;
  error: Error | string;
}

export type GuestsAction =
  | SetCurrencyAction
  | GetCurrencyAction
  | GetCurrencyRequestAction
  | GetCurrencySuccessAction
  | GetCurrencyFailureAction;
