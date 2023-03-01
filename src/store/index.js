import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import {interventionListReducer, interventionReducer} from "../reducers";

export const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

const rootReducer = combineReducers({
  interventionList: interventionListReducer,
  intervention: interventionReducer,
});

// Mount it on the Store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
})


