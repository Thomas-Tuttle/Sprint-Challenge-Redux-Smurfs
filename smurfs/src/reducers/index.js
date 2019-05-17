/*
  Be sure to import in all of the action types from `../actions`
*/
import {FETCHING_SMURFS, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE, ADDING_SMURF, ADDING_SMURF_SUCCESS,
  ADDING_SMURF_FAILURE, DELETING_SMURF, DELETING_SMURF_SUCCESS, DELETING_SMURF_FAILURE } from '../actions';


 // Your initial/default state for this project could *Although does not have to* look a lot like this
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 };


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {

  console.log(state);

  switch (action.type) {
    case FETCHING_SMURFS:
      return { ...state, fetchingSmurfs: true };
    case FETCHING_SMURFS_SUCCESS:
      return { ...state, fetchingSmurfs: false, smurfs: action.payload };
    case FETCHING_SMURFS_FAILURE:
      return { ...state, fetchingSmurfs: false, error: action.payload };
    case ADDING_SMURF:
      return { ...state, addingSmurf: true };
    case ADDING_SMURF_SUCCESS:
      return { ...state, addingSmurf: false, smurfs: action.payload };
    case ADDING_SMURF_FAILURE:
      return { ...state, addingSmurf: false, error: action.payload };
    case DELETING_SMURF:
      return { ...state, deletingSmurf: true };
    case DELETING_SMURF_SUCCESS:
      return { ...state, deletingSmurf: false, smurfs: action.payload };
    case DELETING_SMURF_FAILURE:
      return { ...state, deletingSmurf: false, error: action.payload };

    default:
      return state;
  }
}