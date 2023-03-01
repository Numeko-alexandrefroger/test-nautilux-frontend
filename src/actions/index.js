import * as types from '../types';

export const getInterventions = () => ({type: types.GET_INTERVENTIONS});
export const getInterventionsSuccess = (interventions) => ({
  type: types.GET_INTERVENTIONS_SUCCESS,
  payload: interventions
});
export const getInterventionsFailure = (error) => ({
  type: types.GET_INTERVENTIONS_FAILURE,
  payload: error
});
export const sortInterventionsByDate = () => ({ type: types.SORT_INTERVENTIONS_BY_DATE });

export const addIntervention = (intervention) => ({
  type: types.ADD_INTERVENTION,
  payload: intervention
});

export const getInterventionById = (id) => ({
  type: types.GET_INTERVENTION_BY_ID,
  id
});
export const getInterventionByIdSuccess = (intervention) => ({
  type: types.GET_INTERVENTION_BY_ID_SUCCESS,
  payload: intervention
});
export const getInterventionByIdFailure = (error) => ({
  type: types.GET_INTERVENTION_BY_ID_FAILURE,
  payload: error
});
