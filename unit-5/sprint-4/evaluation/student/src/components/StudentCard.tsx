import { addstu } from "../constants";

export default function StudentCard({id,name,image,code,batch,votecounte}:addstu) {
    
    const handleclickvote=(id:number,vote:number)=>{
        votecounte(id,{vote:vote+1})
    }

    return(
        <div>
            <img src={image} />
            <h4>Name:{name}</h4>
            <p>Student Code: {code}</p>
            <p>Batch: {batch}</p>
            <button onClick={()=>handleclickvote}>Vote</button>
            <p>Vote Count</p>
        </div>
    )

};
