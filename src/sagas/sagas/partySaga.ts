import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import { fetchGuests } from "../../services/guests";
import * as actionCreators from "../actionCreators/guestsActionCreators";
import * as actionTypes from "../actionTypes/guestsActionTypes";

function* onLoadGuests({ query }: actionTypes.GetGuestsAction) {
  try {
    yield put(actionCreators.getGuestsRequest());
    const { data } = yield call(fetchGuests, query);
    yield put(actionCreators.getGuestsSuccess(data.party));
  } catch (error:any) {
    yield put(actionCreators.getGuestsFailure(error.response.data.error));
  }
}

function* watchOnLoadGuests() {
  yield takeEvery(actionTypes.GET_GUESTS, onLoadGuests);
}

export default function* partySaga() {
  yield all([fork( watchOnLoadGuests)]);
}
