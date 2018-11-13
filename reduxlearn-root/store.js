const redux = require("redux");
const rootReducer = require("./rootReducer");
const createStore = redux.createStore;

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log("subscription ",store.getState())
});
module.exports = store;