/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";

export const SMURFS_FETCH_START = "SMURFS_FETCH_START";
export const SMURFS_FETCH_SUCCESS = "SMURFS_FETCH_SUCCESS";
export const SMURFS_FETCH_FAILURE = "SMURFS_FETCH_FAILURE";
export const SMURFS_ADD_START = "SMURFS_ADD_START";
export const SMURFS_ADD_SUCCESS = "SMURFS_ADD_SUCCESS";
export const SMURFS_ADD_FAILURE = "SMURFS_ADD_FAILURE";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: SMURFS_FETCH_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({ type: SMURFS_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SMURFS_FETCH_FAILURE, payload: err });
    });
};

export const addSmurfs = newSmurf => dispatch => {
  dispatch({ type: SMURFS_ADD_START });
  axios
    .post(`http://localhost:3333/smurfs`, newSmurf)
    .then(res => {
      dispatch({ type: SMURFS_ADD_SUCCESS, payload: res.data });
    })

    .catch(err => {
      dispatch({ type: SMURFS_ADD_FAILURE, payload: err });
    });
};

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
