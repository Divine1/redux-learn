const store = require("./store");


store.subscribe(()=>{
    console.log("subscription ",store.getState())
});