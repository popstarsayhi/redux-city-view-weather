import {applyMiddleware, compose, createStore} from "redux";
import allReducers from "../reducer";
import thunk from "redux-thunk";

// const configureStore = ()=>{
//     const middlewares = [thunk]
//     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose
//     const enhancers = composeEnhancers(applyMiddleware(...middlewares))
//     const store = createStore(allReducers, enhancers)
//
//     return store
// }
//
// export default configureStore

const store = createStore(allReducers, applyMiddleware(thunk))
export default store