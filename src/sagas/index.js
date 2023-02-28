import { takeLatest, all } from 'redux-saga/effects';

import * as types from '../types';

function* getInterventions(action) {
  // TODO: retrieve interventions from API
}

export default function* rootSaga() {
  yield all([
    takeLatest(types.GET_INTERVENTIONS, getInterventions)
  ])
}
