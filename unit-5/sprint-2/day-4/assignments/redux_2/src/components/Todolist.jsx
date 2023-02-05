import { shallowEqual, useDispatch, useSelector } from "react-redux";
import TodoInput from "./TodoInput";
import axios from "axios";
import { useEffect } from "react";
import {
  getTodoFailureAction,
  getTodoRequestAction,
  getTodoSuccessAction,
  postTodoFailureAction,
  postTodoRequestAction,
  postTodoSuccessAction,
} from "../Redux/Todo/action";
import { Link } from "react-router-dom";


export default function Todolist() {
  const { data, isLoading, isError } = useSelector((store) => {
   
    return {
      data: store.todoReducer.todos,
      isLoading: store.todoReducer.isLoading,
      isError: store.todoReducer.isError,
    };
  }, shallowEqual);

  const dispatch = useDispatch();

  const getdata = () => {
    dispatch(getTodoRequestAction());
    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        dispatch(getTodoSuccessAction(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        dispatch(getTodoFailureAction());
      });
  };
  useEffect(() => {
    getdata();
  }, []);

  const addTodoPost = (payload) => {
    let newtodo = {
      title: payload,
      status: false,
    };
    dispatch(postTodoRequestAction())
    axios
      .post("http://localhost:8080/todos", newtodo)
      .then((res) => {
        console.log(res.data);
        dispatch(postTodoSuccessAction(res.data))
        getdata()
      })
      .catch((err) => {
        console.log(err);
        dispatch(postTodoFailureAction())
      
      });
  };


  function checgeStatus(id,status){
    axios({
        url:`http://localhost:8080/todos/${id}`,
        method:"patch",
        data:{
            status:!status
        }
    }).then((res)=>{
        getdata()
    })
  }
 

  function delTodo(id){
    axios({
        url:`http://localhost:8080/todos/${id}`,
        method:'delete'

    }).then((res)=>{
        getdata()
    })
  }
console.log("63",data)
  return (
    <>
    <TodoInput addTodoPost={addTodoPost}/>
    {isLoading && <h1>Loading.......</h1>}
    {isError && <h1>Error.......</h1>}
      
      {
        data?.map((el,index)=>{
            return <div key={el.id}>
                <p>{el.title}</p>
                <button onClick={()=>checgeStatus(el.id,el.status)}>{el.status?"Completed":"Not Completed"}</button>
                <button onClick={()=>delTodo(el.id)} >Delete</button>
                <Link to={`/todo/edit:${el.id}`}>Edit Link</Link>
            </div>
        })
      }
    </>
  );
}
