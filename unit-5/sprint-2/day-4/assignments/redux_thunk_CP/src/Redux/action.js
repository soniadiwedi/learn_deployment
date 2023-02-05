//action creator functions here

import axios from "axios";

import {
  ADD_TODOS_ERROR,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "./actionTypes";

// export const getTodoRequestAction=()=>{
//     return ()
// }

export const gettodoData =(dispatch) => {
  dispatch({ type: GET_TODOS_REQUEST });
  axios
    .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_TODOS_ERROR });
    });
};


export const postTodo=(todo)=>(dispatch)=>{

  let obj={
    title:todo,
    status:false
  }
  console.log(obj)
  dispatch({ type: ADD_TODOS_REQUEST });
 axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,obj)
 .then((res)=>{

  gettodoData(dispatch)
 })
    
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADD_TODOS_ERROR });
    });
  

}
