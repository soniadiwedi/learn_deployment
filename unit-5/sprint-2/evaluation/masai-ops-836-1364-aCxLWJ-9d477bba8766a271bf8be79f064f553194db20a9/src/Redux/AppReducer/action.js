import axios from "axios";
import { GET_API_FAILURE, GET_API_REQUEST, GET_API_SUCCESS } from "./actionType";


function GetApiRequest(){
    return ({type:GET_API_REQUEST})
}

function GetApiSuccess(data){
    return ({type:GET_API_SUCCESS,payload:data})
}

function GetApiFailure(){
    return ({type:GET_API_FAILURE})
}

//////////////////////////////////////////////////////////////////////
export const CoffeeData=()=>{
    dispatch(GetApiRequest())

    axios({
        url:`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`,
        method:"get",
    }).then((res)=>{
        console(res.data)
        dispatch(GetApiSuccess(res.data))
    }).catch((err)=>{
        dispatch(GetApiFailure())
    })
}

////////////////////////////////////////////////////////////////////////
export const EmployeeData=()=>{
    dispatch(GetApiRequest())

    axios({
        url:`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`,
        method:"get",
    }).then((res)=>{
        console(res.data)
        dispatch(GetApiSuccess(res.data))
    }).catch((err)=>{
        dispatch(GetApiFailure())
    })
}

/////////////////////////////////////////////////////////////////////////////////////////

export const RestaurantData=()=>{
    dispatch(GetApiRequest())

    axios({
        url:`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`,
        method:"get",
    }).then((res)=>{
        console(res.data)
        dispatch(GetApiSuccess(res.data))
    }).catch((err)=>{
        dispatch(GetApiFailure())
    })
}