import axios from "axios"
import { GET_COFFEE_DATA_FAILURE, GET_COFFEE_DATA_REQUEST, GET_COFFEE_DATA_SUCCESS,GET_EMPLOYEE_DATA_REQUEST, GET_EMPLOYEE_DATA_SUCCESS, GET_RESTAURANT_DATA_FAILURE, GET_RESTAURANT_DATA_REQUEST, GET_RESTAURANT_DATA_SUCCESS, GET_REST_DATA_FAIL, GET_REST_DATA_REQ, GET_REST_DATA_SUCC } from "./actionType";

export const getCoffeeData=(dispatch)=>{
    dispatch({type:GET_COFFEE_DATA_REQUEST})
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`).then((res)=>{
        dispatch({type:GET_COFFEE_DATA_SUCCESS,payload:res.data});
    })
    .catch((err)=>{
        dispatch({type:GET_COFFEE_DATA_FAILURE});
    })
};

export const getEmployeeData=(dispatch)=>{
    dispatch({type:GET_EMPLOYEE_DATA_REQUEST})
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`).then((res)=>{
        dispatch({type:GET_EMPLOYEE_DATA_SUCCESS,payload:res.data});
    })
    .catch((err)=>{
        dispatch({type:GET_COFFEE_DATA_FAILURE});
    })
};

export const getRestData=(dispatch)=>{
    dispatch({type:GET_RESTAURANT_DATA_REQUEST})
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`).then((res)=>{
        dispatch({type:GET_RESTAURANT_DATA_SUCCESS,payload:res.data});
    })
    .catch((err)=>{
        dispatch({type:GET_RESTAURANT_DATA_FAILURE});
    })
};