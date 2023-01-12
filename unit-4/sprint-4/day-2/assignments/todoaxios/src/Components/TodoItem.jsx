



export default function TodoItem({id,title,status,handledelete,handleToggle}) {
    

    return(
       <>
        <div>
            <h3>{title}</h3>
            <button onClick={()=>handleToggle(id,status)}>{status?"Completed":"Not Completed"}</button>
            <button onClick={()=>handledelete(id)}>Delete</button>
        </div>
           

       </>
    )
};  
