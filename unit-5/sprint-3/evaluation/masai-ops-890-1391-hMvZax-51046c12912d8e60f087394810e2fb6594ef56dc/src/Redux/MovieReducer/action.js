import { GET_MOVIE_DATA_FAILURE, GET_MOVIE_DATA_REQUEST, GET_MOVIE_DATA_SUCCESS } from "./actionTypes";
import axios from "axios"
export const getRequestMovie=()=>{
  return {type:GET_MOVIE_DATA_REQUEST}
}

export const getSuccessMovie=(payload)=>{
  return {type:GET_MOVIE_DATA_SUCCESS,payload}
}

export const getFailureMovie=()=>{
  return {type:GET_MOVIE_DATA_FAILURE}
}

export const getMovies =(dispatch) => {
  // Complete the getMovies logic here
  dispatch(getRequestMovie())
  axios.get(`http://localhost:8080/movies`).then((res)=>{
    console.log(res.data)
    dispatch(getSuccessMovie(res.data))
  }).catch((e)=>{
    dispatch(getFailureMovie())
  })
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getMovies = getMovies;
}
