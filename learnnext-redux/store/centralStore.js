import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';



var REDUX_DEV_TOOLS = (typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);
const composeEnhancers =  REDUX_DEV_TOOLS || compose;


const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

export default store;