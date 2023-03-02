import {takeLatest, all, call, put, select} from 'redux-saga/effects';
import axios from "axios";
import * as types from "../types";
import {
  getInterventionByIdFailure,
  getInterventionByIdSuccess,
  getInterventionsFailure,
  getInterventionsSuccess,
} from "../actions";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001'
});

export function* getInterventionsSaga() {
  try {
    let interventions = yield select(state => state.interventionList.interventions);
    if(interventions.length === 0){
      const response = yield call(axiosInstance.get, '/interventions');
      interventions = response.data;
    }

    yield put(getInterventionsSuccess(interventions));
  } catch (error) {
    yield put(getInterventionsFailure(error));
  }
}

export function* getInterventionByIdSaga(action) {
  try {
    //Get current state of interventions, if state empty in the store get list from axios.
    let interventions = yield select(state => state.interventionList.interventions);
    if(interventions.length === 0){
      const response = yield call(axiosInstance.get, '/interventions');
      interventions = response.data;
    }

    const intervention = interventions.find(item => item.id === action.id);

    if(intervention){
      yield put(getInterventionByIdSuccess(intervention));
    }else{
      yield put(getInterventionByIdFailure({message: "INTERVENTION_NOT_AVAILABLE"}));
    }
  } catch (error) {
    yield put(getInterventionByIdFailure(error));
  }
}

export default function* rootSaga() {
  yield all([takeLatest(types.GET_INTERVENTIONS, getInterventionsSaga)])
  yield all([takeLatest(types.GET_INTERVENTION_BY_ID, getInterventionByIdSaga)])
}
