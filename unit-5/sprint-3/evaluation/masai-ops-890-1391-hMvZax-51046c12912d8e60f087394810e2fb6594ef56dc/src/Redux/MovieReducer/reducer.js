import { GET_MOVIE_DATA_FAILURE, GET_MOVIE_DATA_REQUEST, GET_MOVIE_DATA_SUCCESS } from "./actionTypes"

const inti={
    isLoading: false,
    isError: false,
    movies: [],
  }


export const reducer=(state=inti,{type,payload})=>{
    switch (type){
        case GET_MOVIE_DATA_REQUEST:return {...state,isLoading:true}
        case GET_MOVIE_DATA_SUCCESS:return {...state,isLoading:false,movies:payload}
        case GET_MOVIE_DATA_FAILURE:return {...state,isLoading:false,isError:true}
        default :return state
    }
}

