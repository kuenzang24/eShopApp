import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import cartItems from "./Reducers/cartItem";

const reducers = combineReducers({
    cartItems: cartItems,
});

const store = createStore(
    reducers,
    // applyMiddleware(thunkMiddleware) 
);

export default store;