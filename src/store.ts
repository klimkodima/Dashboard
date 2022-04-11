import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga';

import partyReducer from './reducers/partyReducer';
import tableFilterReducer from './reducers/tableFilterReducer';
import listFilterReducer from './reducers/listFilterReducer';

import { sagaAddFeedbackWatcher } from '../src/saga/sagas';

const saga = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage
};

const reducers = combineReducers({
  party: partyReducer,
  listFilter: listFilterReducer,
  tableFilter: tableFilterReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk, saga)));

saga.run(sagaAddFeedbackWatcher);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
