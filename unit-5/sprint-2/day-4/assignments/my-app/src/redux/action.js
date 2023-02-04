import { ADD, GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCCESS, REDUCE } from "./actionTypes"

export const addAction=(payload)=>{
    return ({type:ADD,payload})
}

export const reduceAction=(payload)=>{
    return ({type:REDUCE,payload})
}
//////////////////////////////////////
export const todoRequestAction=()=>{
    return ({type:GET_TODO_REQUEST})
}

export const todoSuccessAction=(payload)=>{
    return ({type:GET_TODO_SUCCESS,payload})
}

export const todoFailureAction=()=>{
    return ({type:GET_TODO_FAILURE})
}

/////////////////////////////////////////////////

export const postTodoRequestAction=()=>{
    return ({type:POST_TODO_REQUEST})
}

export const postTodoSuccessAction=(payload)=>{
    return ({type:POST_TODO_SUCCESS,payload})
}

export const postTodoFailureAction=()=>{
    return ({type:POST_TODO_FAILURE})
}