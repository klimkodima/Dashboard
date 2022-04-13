import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import partyReducer from './reducers/partyReducer';
import tableFilterReducer from './reducers/tableFilterReducer';
import listFilterReducer from './reducers/listFilterReducer';
import guestsReducer  from "./sagas/reducers/guestsReducer";

import rootSaga from './sagas/sagas/rootSaga';

const persistConfig = {
  key: 'root',
  storage
};

const reducers = combineReducers({
  party: partyReducer,
  listFilter: listFilterReducer,
  tableFilter: tableFilterReducer,
  saga: guestsReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



