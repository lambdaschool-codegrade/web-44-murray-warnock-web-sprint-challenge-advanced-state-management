import axios from 'axios';

export const START_FETCH_SMURF = "START_FETCH_SMURF";
export const ADD_SMURF = "ADD_SMURF";
export const FAIL_FETCH_SMURF = "FAIL_FETCH_SMURF";
export const SET_VALUE_TO_ERROR_MESSAGE = "SET_VALUE_TO_ERROR_MESSAGE";
export const SUCCESS_FETCH_SMURF = "SUCCESS_FETCH_SMURF";

export const fetchStart = ()=> {
    return({type: START_FETCH_SMURF});
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.