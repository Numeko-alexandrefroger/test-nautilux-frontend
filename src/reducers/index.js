import { combineReducers } from 'redux';

import * as types from '../types';

export const interventions = (state = [], action) => {
  switch (action) {
    case types.GET_INTERVENTIONS:
      // TODO
    default:
      return state
  }
}

export default () => combineReducers({
  interventions,
});
