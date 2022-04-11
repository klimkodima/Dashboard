import { UIGuest } from "../../types";

export const SET_GUESTS = "guestsActionTypes/SET_GUESTS";
export interface SetGuestsAction {
  type: typeof SET_GUESTS;
  guests: UIGuest[];
}

export const GET_GUESTS = "guestsActionTypes/GET_GUESTS";
export interface GetGuestsAction {
  type: typeof GET_GUESTS;
  query: string;
}

export const GET_GUESTS_REQUEST = "guestsActionTypes/GET_GUESTS_REQUEST";
export interface GetGuestsRequestAction {
  type: typeof GET_GUESTS_REQUEST;
}

export const GET_GUESTS_SUCCESS = "guestsActionTypes/GET_GUESTS_SUCCESS";
export interface GetGuestsSuccessAction {
  type: typeof GET_GUESTS_SUCCESS;
  guests: UIGuest[];
}

export const GET_GUESTS_FAILURE = "guestsActionTypes/GET_GUESTS_FAILURE";
export interface GetGuestsFailureAction {
  type: typeof GET_GUESTS_FAILURE;
  error: Error | string;
}

export type GuestsAction =
  | SetGuestsAction
  | GetGuestsAction
  | GetGuestsRequestAction
  | GetGuestsSuccessAction
  | GetGuestsFailureAction;
