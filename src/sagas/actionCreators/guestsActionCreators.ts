import * as actions from "../actionTypes/guestsActionTypes";
import { UIGuest, GuestWithOrder } from "../../types";

export function setGuests(guests: GuestWithOrder[]): actions.SetGuestsAction {
  return {
    type: actions.SET_GUESTS,
    guests
  };
}

export function getGuests(): actions.GetGuestsAction {
  return {
    type: actions.GET_GUESTS,
  };
}

export function clearState(): actions.ClearStateAction {
  return {
    type: actions.CLEAR_STATE,
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
