const actionTypes = require("../actionTypes");

const initialState = {
    name : "verna"
}


const CarReducer = (state = initialState,action) =>{
    console.log("in CarReducer action ",action)

    switch(action.type){
        case actionTypes.ADD_CAR:
            console.log("in addcar switch")
            return {
                ...state,
                name : action.value
            }
        default:
            return state
    }
    return state;
}


module.exports = CarReducer;