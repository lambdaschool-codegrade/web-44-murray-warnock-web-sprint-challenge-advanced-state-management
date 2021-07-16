
import { START_FETCH_SMURF,
    SUCCESS_FETCH_SMURF,   
    FAIL_FETCH_SMURF,
    ADD_SMURF,
    SET_VALUE_TO_ERROR_MESSAGE } from "../actions/";

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message
export const initialState = {
    smurfs: [],
    isLoading: false,
    errorMessage: "" 
}
//2. Add in the arguments needed to complete a standard reducer function.
const reducer = (state=initialState, action)=>{
    switch(action.type) {
//3. Add in a reducer case to accomidate the start of a smurf fetch.
        case START_FETCH_SMURF:
        return({
            ...state,
            isLoading: true
        });
//4. Add in a reducer case to accomidate the successful smurf api fetch.
        case SUCCESS_FETCH_SMURF:
            return({
                ...state,
                isLoading: false,
                smurfs: action.payload
            });
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
        case FAIL_FETCH_SMURF:
            return({
                ...state,
                dataError: action.type,
                isLoading: false
        }); 
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
        case ADD_SMURF:
            return({
                ...state,
                smurfs: [...state.smurfs, action.payload] 
            });
//  Add in a reducer case that adds in a value to the error message.
        case SET_VALUE_TO_ERROR_MESSAGE:
            return({
                ...state,
                errorMessage: action.payload
            });      
        default:
            return state;
    }
}

export default reducer;



//7. Add in a reducer case that adds in a value to the error message.