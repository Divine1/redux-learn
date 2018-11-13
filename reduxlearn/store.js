const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter : 0
}

const rootReducer = (state = initialState,action) => {
    return state;
}
const store = createStore(rootReducer);
console.log(store.getState())

store.subscribe(()=>{
    
    console.log("subscription ",store.getState())
});


store.dispatch({type : 'INC_COUNTER'})
store.dispatch({type : 'ADD_COUNTER' ,value : 10})

console.log(store.getState())