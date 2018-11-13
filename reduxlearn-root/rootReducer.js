const redux = require("redux");
const combineReducers = redux.combineReducers;
const animalReducer = require("./reducers/Animal");
const carReducer = require("./reducers/Car");

const rootReducer = combineReducers({
    animal : animalReducer,
    car : carReducer
})

module.exports = rootReducer;