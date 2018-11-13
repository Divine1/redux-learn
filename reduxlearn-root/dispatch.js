const store = require("./store");


//store.dispatch({type : "ADD_CAR", value : "hyundai"});

console.log("dispatch1 ", store.dispatch({type : "ADD_CAR", value : "hyundai1"}))

console.log("dispatch2 ", store.dispatch({type : "ADD_CAR", value : "sonata"}))