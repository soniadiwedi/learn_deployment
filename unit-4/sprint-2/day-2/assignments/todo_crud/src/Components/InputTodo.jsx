
function InputTodo({handleInput,addNewTodo}){

    return(
        <div>
            <input placeholder="Write here Todo"  onChange={handleInput} />
            <button onClick={addNewTodo}>Click Here</button>
        </div>
    )
}

export default InputTodo;