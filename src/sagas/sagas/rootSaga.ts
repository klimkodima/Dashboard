import { all, fork } from "redux-saga/effects";
import PartySaga from "./partySaga";

export default function* rootSaga() {
  yield all([fork(PartySaga)]);
}