import {combineReducers} from 'redux'
import careerReducer from './reducer/careerReducer'
import contactusReducer from './reducer/contactusReducer'


const rootReducer = combineReducers({
    contactus : contactusReducer,
    career : careerReducer
})

export default rootReducer;