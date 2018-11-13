const actionTypes = require("../actionTypes");


const initialState = {
    name : "cat"
}

const AnimalReducer = (state = initialState,action) =>{
    console.log("in AnimalReducer action ",action)
    switch(action.type){
        case actionTypes.ADD_ANIMAL:
            console.log("in addanimal switch")
            return {
                ...state,
                name : action.value
            }
        default:
            return state
    }
    return state;
}


module.exports = AnimalReducer;