import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as productReducer} from "./ProductReducer/reducer"
import {reducer as authenticationReducer} from "./AuthReducer/reducer"

const rootReducer=combineReducers({
    productReducer,
    authenticationReducer,
})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));
