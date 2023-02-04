import TodoInput from "./TodoInput";
import { useEffect } from "react";
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
    postTodoFailureAction,
    postTodoRequestAction,
    postTodoSuccessAction,
  todoFailureAction,
  todoRequestAction,
  todoSuccessAction,
} from "../redux/action";


export default function TodoList() {
    const dispatch = useDispatch();
    // const data=useSelector((store)=>{
    //     console.log(store.todo)
    //     return store.todo
    // })

    // const isloading=useSelector((store)=>{
    //     return store.isLoading
    // })
    
    const {data,isloading}=useSelector((store)=>{
        return{
            data:store.todo,
            isloading:store.isLoading
        }
    },shallowEqual)

    const getData = () => {
        dispatch(todoRequestAction());
        axios
          .get("http://localhost:808/todos")
          .then((res) => dispatch(todoSuccessAction(res.data)))
          .catch((err) => dispatch(todoFailureAction()));
      };
    
      useEffect(() => {
        getData();
      },[]);
    
///////////////////AddingNewTodo/////////////////////////////////////////////
    const AddTodoPost=(payload)=>{
        let newtodo={
            title:payload,
            status:false
        }
        dispatch(postTodoRequestAction());
        axios.post("http://localhost:808/todos",newtodo).then((res)=>{
            console.log(res.data)
            dispatch(postTodoSuccessAction(res.data))
        }).catch((Err)=>{
            console.log(Err)
            dispatch(postTodoFailureAction())   
        })
    }

    // const handleChange=()=>{
    //     if()
    // }
    return (
        <div>
            <TodoInput AddTodoPost={AddTodoPost}/>
            {isloading? <h1>Loading......</h1>:
            data.length>0 && data.map((el)=>{
                return <div key ={el.id}>
                   <p>{el.title}</p>
                   <button >{el.status?"Completed":"Not Completed"}</button>
                   <button>Delete</button>
                </div>
            })}
        </div>
    )
};
