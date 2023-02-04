import { combineReducers, legacy_createStore } from "redux";
import {reducer as counterReducer} from "./Redux/Counter/reducer";
import {reducer as todoReducer} from "./Redux/Todo/reducer"



const rootReducer=combineReducers({
    counterReducer,
    todoReducer,
})
export const store=legacy_createStore(rootReducer)