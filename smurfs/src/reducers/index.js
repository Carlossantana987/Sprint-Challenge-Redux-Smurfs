/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  SMURFS_FETCH_START,
  SMURFS_FETCH_SUCCESS,
  SMURFS_FETCH_FAILURE
  // SMURFS_ADD_START,
  // SMURFS_ADD_SUCCESS,
  // SMURFS_ADD_FAILURE
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurfs: false,
  error: null
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case SMURFS_FETCH_START:
      return { ...state, fetchingSmurfs: true };

    case SMURFS_FETCH_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: [...state.smurfs, ...action.payload]
      };

    case SMURFS_FETCH_FAILURE:
      return { ...state, fetchingSmurfs: false, error: action.payload };

    default:
      return state;
  }
};

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default smurfReducer;
