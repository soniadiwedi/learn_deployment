
export default function TodoInput({todo,settodo,CreateTodo}) {
   const handleInput=(e)=>{
        console.log(e.target.value)
        let {name,value}=e.target
        settodo({...todo,[name]:value})
    }  
    
    
    const handleCLick=(e)=>{
        e.preventDefault()
        CreateTodo(todo)
    }

    console.log(todo)

    return(
        <div>
            <input type="text" onChange={handleInput} name="title" value={todo.title} data-testid = "todo-input"/>
            <button onClick={handleCLick} data-testid ="add-button">Add Todo</button>
        </div>
    )
};
