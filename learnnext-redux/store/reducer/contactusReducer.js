import * as actionTypes from '../action/types';

const initialState = {
    email : "cat@gmail.com"
}

const ContactusReducer = (state = initialState,action) =>{
    console.log("in ContactusReducer action ",action)
    switch(action.type){
        case actionTypes.VALIDATE_EMAIL:
            console.log("in VALIDATE_EMAIL switch")
            return {
                ...state,
                email : action.payload.email
            }
        default:
            return state
    }
}


export default ContactusReducer;