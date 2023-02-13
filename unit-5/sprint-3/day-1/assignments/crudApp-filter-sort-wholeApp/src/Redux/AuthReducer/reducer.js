import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType";
import { loginFailureAction, loginRequestAction, loginSuccesstAction } from "./action";

const init={
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false,
    products:[]
}


export  function reducer(state=init,{type,payload}) {
    switch(type){
    case LOGIN_REQUEST:return {...state,isLoading:true}      
    case LOGIN_SUCCESS:return {...state,token:payload,isAuth:true,isLoading:false}
    case LOGIN_FAILURE:return{...state,isError:true,isLoading:false}
        default:return state;
    }
};
