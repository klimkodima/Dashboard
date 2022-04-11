import { takeEvery, put, all } from 'redux-saga/effects'
// import { addFeedback } from './../reducers/partyReducer';

function* sagaAddFeedbackWatcher() {
  yield takeEvery('ADD_FEEDBACK_REQUEST', sagaAddFeedbackWorker);
}

function* sagaAddFeedbackWorker(action:any) {
  console.log(action);
  const payload:object = action.payload;
  yield put({ type: 'ADD_FEEDBACK', payload });
}

function* sagaClearStateWatcher() {
  yield takeEvery('CLEAR_APP_STATE', sagaClearStateWorker);
}

function* sagaClearStateWorker() {
  yield put({ type: 'CLEAR_STATE'});
}

export function* rootWatcher(){
yield all([sagaAddFeedbackWatcher(), sagaClearStateWatcher()])
}