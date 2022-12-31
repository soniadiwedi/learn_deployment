function PerItemTodo({keys,id,title,status,toggleStatus,deletetodo}){
 return <>
 
    <div key={keys}>

    <input value={title}/>
    <button onClick={()=>{toggleStatus(id)}}>{status==true?"Completed":"Not Completed"}</button>
    <button onClick={()=>{deletetodo(id)}}>DELETE</button>
 </div>
 </>
}

export default PerItemTodo