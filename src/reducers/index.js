import * as types from '../types';

export const interventionListReducer = (state = {
  interventions: [],
  isLoading: false,
  error: null,
  sortByDate: false,
}, action) => {
  switch (action.type) {
    case types.GET_INTERVENTIONS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case types.GET_INTERVENTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        interventions: action.payload,
      };
    case types.GET_INTERVENTIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.SORT_INTERVENTIONS_BY_DATE:
      const sortedInterventions = [...state.interventions].sort((a, b) => {
        if (state.sortByDate) {
          return new Date(a.created_at) - new Date(b.created_at);
        } else {
          return new Date(b.created_at) - new Date(a.created_at);
        }
      });
      return {
        ...state,
        sortByDate: !state.sortByDate,
        interventions: sortedInterventions,
      };
    case types.ADD_INTERVENTION:
      const intervention = {
        id: state.interventions.length+1,
        ...action.payload,
      }

      return {
        ...state,
        isLoading: false,
        interventions: [...state.interventions, intervention],
      };
    default:
      return state;
  }
}

export const interventionReducer = (state = {
  intervention: null,
  isLoading: false,
  error: null
}, action) => {
  switch (action.type) {
    case types.GET_INTERVENTION_BY_ID:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case types.GET_INTERVENTION_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        intervention: action.payload,
      };
    case types.GET_INTERVENTION_BY_ID_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
