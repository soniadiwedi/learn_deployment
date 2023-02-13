import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const loginRequest=()=>{
 return {type:LOGIN_REQUEST}
}

export const loginSuccess=(payload)=>{
  return {type:LOGIN_SUCCESS,payload}
 }

 export const loginFailure=()=>{
  return {type:LOGIN_FAILURE}
 }



export const login =(user)=> (dispatch) => {
  // Complete login logic here
  dispatch(loginRequest)
  return axios.post(`https://reqres.in/api/login`,user).then((res)=>{
    console.log(res.data.token)
    dispatch(loginSuccess(res.data.token))

  }).catch((e)=>{
    dispatch(loginFailure())
  })

};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
