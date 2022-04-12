import * as actions from "../actionTypes/currencyActionTypes";
import { CurrencyType } from "../../types";

export function setCurrency(currency: CurrencyType): actions.SetCurrencyAction {
  return {
    type: actions.SET_CURRENCY,
    currency
  };
}

export function getCurrency(): actions.GetCurrencyAction {
  return {
    type: actions.GET_CURRENCY,
  };
}

export function getCurrencyRequest(): actions.GetCurrencyRequestAction {
  return {
    type: actions.GET_CURRENCY_REQUEST
  };
}

export function getCurrencySuccess(
    currency: CurrencyType
): actions.GetCurrencySuccessAction {
  return {
    type: actions.GET_CURRENCY_SUCCESS,
    currency
  };
}

export function getCurrencyFailure(
  error: Error | string
): actions.GetCurrencyFailureAction {
  return {
    type: actions.GET_CURRENCY_FAILURE,
    error
  };
}
