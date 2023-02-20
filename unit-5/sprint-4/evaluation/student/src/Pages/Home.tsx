import { useState } from "react"
import { addData } from "../api"
import { nomination } from "../constants"

export default function Home() {

    const initial:nomination={
        name:"",
        image:"",
        code:"",
        batch:"",
        vote:0,
        id:1,
    }

    const[data,setdata]=useState<nomination>(initial)
    const[name,setname]=useState<string>("")
    const[image,setimage]=useState<string>("")
    const[batch,setbatch]=useState<string>("")
    const[code,setcode]=useState<string>("")




    // const handlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    //     let val={...data,[e.target.name]:e.target.value}
    //     setdata(val)
    // }

    const handlesubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        addData(name,image,code,batch)
        setname("")
        setimage("")
        setcode("")
        setbatch("")  
    }
    console.log(data);
    return(
        <div> <h1>Nominate</h1>
           <form onSubmit={handlesubmit}>
            <input type="text" name="name" value={name} onChange={(e)=>setname(e.target.value)} />
            <input type="url" name="image" value={image} onChange={(e)=>setimage(e.target.value)}/>
            <input type="text" name="code" value={code} onChange={(e)=>setcode(e.target.value)}/>
            <input type="text" name="batch" value={batch} onChange={(e)=>setbatch(e.target.value)}/>
           <button>Nominate</button>
           </form>
        </div>
    )
};
