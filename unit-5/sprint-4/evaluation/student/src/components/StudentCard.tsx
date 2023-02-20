import { voteapi } from "../api";
import { addstu, nomination } from "../constants";


interface votedata extends nomination{
    votecounte:()=>void
}
export default function StudentCard({id,name,image,vote,code,batch,votecounte}:votedata) {
    
    const handleclickvote=()=>{
       voteapi(id).then(()=>votecounte())
    }

    return(
        <div>
            <img src={image} />
            <h4>Name:{name}</h4>
            <p>Student Code: {code}</p>
            <p>Batch: {batch}</p>
            <button onClick={handleclickvote}>Vote</button>
            <p>Vote Count : {vote}</p>
        </div>
    )

};
