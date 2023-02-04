import { GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCCESS } from "./actionType";

const initialState={
    todos:[],
    isLoading:false,
    isError:false
}

export  function reducer(state=initialState,{type,payload}) {
    console.log("10",payload)
    switch(type){
        case GET_TODO_REQUEST:return {...state,isLoading:true}
        case GET_TODO_SUCCESS:return {...state,isLoading:false ,todos:payload}
        case GET_TODO_FAILURE:return {...state,isError:true}

        case POST_TODO_REQUEST:return {...state,isLoading:true}
        case POST_TODO_SUCCESS:return {...state,isLoading:false }
        case POST_TODO_FAILURE:return {...state,isError:true}
        default :return state
    }
};
