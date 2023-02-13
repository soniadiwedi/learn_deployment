import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType"


export const loginRequestAction=()=>{
    return {type:LOGIN_REQUEST}
}

export const loginSuccesstAction=(payload)=>{
    return {type:LOGIN_SUCCESS,payload}
}


export const loginFailureAction=()=>{
    return {type:LOGIN_FAILURE}
}


export const LoginData=(userdata)=>(dispatch)=>{
    dispatch(loginRequestAction())
    return axios.post(`https://reqres.in/api/login`,userdata).then((res)=>{
        // console.log(res)
        dispatch(loginSuccesstAction(res.data.token))
    }).catch((err)=>{
        dispatch(loginFailureAction())
    })

}