import { takeEvery, put } from 'redux-saga/effects'
// import { addFeedback } from './../reducers/partyReducer';

export function* sagaAddFeedbackWatcher() {
  yield takeEvery('ADD_FEEDBACK_REQUEST', sagaAddFeedbackWorker);
}

function* sagaAddFeedbackWorker(action:any) {
  console.log(action);
  const payload:object = action.payload;
  yield put({ type: 'ADD_FEEDBACK', payload });
}