import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"

export const loginRequestAction=()=>{
    return {type:LOGIN_REQUEST}
}

export const loginSuccesstAction=(payload)=>{
    return {type:LOGIN_SUCCESS,payload}
}


export const loginFailureAction=()=>{
    return {type:LOGIN_FAILURE}
}