import { memo } from "react";

const heavyTask=(time)=>{
    let start=Date.now()
    while(Date.now()-start<time){
        continue
    }
}

 const Todo=({title,id,status})=>{
    heavyTask(200)
    return(
        <div>
            <h3>{title}</h3>
            <p>{status ? "true":"false"}</p>
        </div>
    )
}
    
export default memo(Todo)
