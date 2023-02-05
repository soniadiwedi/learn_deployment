import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import shallowEqual from "react-redux/es/utils/shallowEqual";


// get all the todos from the redux store, and map them inside this component
const TodoList = () => {
  const {todo,isLoading,isError}=useSelector((store)=>{
    console.log(store.todos)
    return{
      todo:store.todos,
      isLoading:store.isLoading
    }
  },shallowEqual)

  console.log(todo)
  return (
    <div data-testid='todo-list-wrapper'>
      {/* {isLoading && <h1>Loading......</h1>} */}
      {/* map all the "individual/single" todo inside this div. */}
      {/* <div data-testid="single-todo" > */}
        {
          todo?.map((el)=>{
            return <div  data-testid="single-todo" key={el.id}>
               <p>{el.title} - {el.status?"True":"False"}</p>
            </div>
          })
        }
      {/* </div> */}


    </div>
  );
};

export default TodoList;
