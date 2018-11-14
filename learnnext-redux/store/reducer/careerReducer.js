import * as actionTypes from '../action/types';

const initialState = {
    jobTitle : "programmer"
}

const CareerReducer = (state = initialState,action) =>{
    console.log("in CareerReducer action ",action)
    switch(action.type){
        case actionTypes.VALIDATE_JOB_TITLE:
            console.log("in VALIDATE_JOB_TITLE switch")
            return {
                ...state,
                name : action.value
            }
        default:
            return state
    }
}


export default CareerReducer;