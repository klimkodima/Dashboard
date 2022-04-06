import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import partyReducer from './reducers/partyReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
    party: partyReducer,
});

const persistedReducer = persistReducer(persistConfig,  reducers);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



