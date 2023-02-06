import axios from "axios";
import { GET_COFFEE_DATA_FAILURE, GET_COFFEE_DATA_REQUEST, GET_COFFEE_DATA_SUCCESS, GET_EMPLOYEE_DATA_FAILURE, GET_EMPLOYEE_DATA_REQUEST, GET_EMPLOYEE_DATA_SUCCESS, GET_RESTAURANT_DATA_FAILURE, GET_RESTAURANT_DATA_REQUEST, GET_RESTAURANT_DATA_SUCCESS } from "./actionType";

const coffeeRequestAction=()=>{
    return {type:GET_COFFEE_DATA_REQUEST}
}

const coffeeSuccessAction=(payload)=>{
    return {type:GET_COFFEE_DATA_SUCCESS,payload}
}

const coffeeFailureAction=()=>{
    return {type:GET_COFFEE_DATA_FAILURE}
}

//////////////////////////////////////////////////
const employeeRequestAction=()=>{
    return {type:GET_EMPLOYEE_DATA_REQUEST}
}

const employeesuccessAction=(payload)=>{
    return {type:GET_EMPLOYEE_DATA_SUCCESS,payload}
}

const employeFailureAction=()=>{
    return {type:GET_EMPLOYEE_DATA_FAILURE}
}

///////////////////////////////////////////////////////////////
const restaurantRequestAction=()=>{
    return {type:GET_RESTAURANT_DATA_REQUEST}
}

const restaurantSuccessAction=(payload)=>{
    return {type:GET_RESTAURANT_DATA_SUCCESS,payload}
}

const restaurantFailureAction=()=>{
    return {type:GET_RESTAURANT_DATA_FAILURE}
}
//////////////////////////////////////////////////////////////////////
export const CoffeeData=(p)=>(dispatch)=>{
    dispatch(coffeeRequestAction())
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`,p).then((res)=>{
        dispatch(coffeeSuccessAction(res.data))
        console.log(res.data)
    }).catch((err)=>{
        dispatch(coffeeFailureAction())
    })
}

////////////////////////////////////////////////////////////////////////
// export const EmployeeData=()=>{
//     dispatch(employeeRequestAction())

//     axios({
//         url:`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`,
//         method:"get",
//     }).then((res)=>{
//         console(res.data)
//         dispatch(employeesuccessAction(res.data))
//     }).catch((err)=>{
//         dispatch(employeFailureAction())
//     })
// }

/////////////////////////////////////////////////////////////////////////////////////////

// export const RestaurantData=()=>{
//     dispatch(restaurantRequestAction())

//     axios({
//         url:`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`,
//         method:"get",
//     }).then((res)=>{
//         console(res.data)
//         dispatch(restaurantSuccessAction(res.data))
//     }).catch((err)=>{
//         dispatch(restaurantFailureAction())
//     })
// }