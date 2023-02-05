import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as counterReducer} from "./Redux/Counter/reducer";
import {reducer as todoReducer} from "./Redux/Todo/reducer"
import{reducer as loginReducer} from "./Redux/Authentication/reducer"


const rootReducer=combineReducers({
    counterReducer,
    todoReducer,
    loginReducer
})


const track={
    add:0,
    reduce:0
}

const logger=(store)=>(dispatch)=>(action)=>{
    if(action.type=="ADD"){
        track.add++
    }else if(action.type=="REDUCE"){
        track.reduce++
    }else if(action.type=="function"){
        return action(store.dispatch)
    }
    console.log(track)
    return dispatch(action)
}
export const store=legacy_createStore(rootReducer,applyMiddleware(logger))