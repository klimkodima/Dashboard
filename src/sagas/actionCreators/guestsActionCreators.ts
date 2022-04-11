import * as actions from "../actionTypes/guestsActionTypes";
import { UIGuest } from "../../types";

export function setGuests(guests: UIGuest[]): actions.SetGuestsAction {
  return {
    type: actions.SET_GUESTS,
    guests
  };
}

export function getGuests(
  query: string,
): actions.GetGuestsAction {
  return {
    type: actions.GET_GUESTS,
     query
  };
}

export function getGuestsRequest(): actions.GetGuestsRequestAction {
  return {
    type: actions.GET_GUESTS_REQUEST
  };
}

export function getGuestsSuccess(
    guests: UIGuest[]
): actions.GetGuestsSuccessAction {
  return {
    type: actions.GET_GUESTS_SUCCESS,
    guests
  };
}

export function getGuestsFailure(
  error: Error | string
): actions.GetGuestsFailureAction {
  return {
    type: actions.GET_GUESTS_FAILURE,
    error
  };
}
