function TodoItem(props){
   
  
    return(
        <>
            <li>
            {props.title}- {props.status ?"Completed":"Not Completed"}
            <button onClick={()=>props.handleToggle(props.id)}>Toggle</button>
            <button onClick={()=>props.handleDelete(props.id)}>Delete</button>
    
        </li>
        </>
    )     
}


export default TodoItem;