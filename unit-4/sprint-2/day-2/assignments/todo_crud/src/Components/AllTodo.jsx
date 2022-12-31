import PerItemTodo from "./PerItemTodo"

function Alltodo({todo,toggleStatus,deletetodo}){


    return <>
    
    {
        todo.map((el)=>{
            return <PerItemTodo keys={el.id} {...el} toggleStatus={toggleStatus}  deletetodo={deletetodo} />
        })
    }
    </>


   

}

export default Alltodo