import { useEffect } from "react";
import { useState } from "react"
import { Link, useSearchParams } from "react-router-dom";

export default function Products() {
    const[item,Setitem]=useState([]);
    const[params,setparams]=useSearchParams()
    const[page,setPage]=useState(convertno(params.get("query")))

function convertno(val){
    let no=Number(val)
    if(typeof no!="number"){
        no=1
    }return no
}
///////////////////////////////////////////////////////
    async function fetchData(page){
        try{
            let res= await fetch (`http://localhost:3030/product/?_page=${page}&_limit=3`)
            let data=await res.json();
            Setitem(data)
            console.log(data)
        }catch(err){

        }
    }
////////////////////////////////////////////////////////
    useEffect(()=>{
        fetchData(page)
    },[page])
///////////////////////////////////////////////////////
    useEffect(()=>{
        setparams({query:page})
    },[page])
///////////////////////////////////////////////////////

function handleClick(val){
    let cur=val+page
    setPage(cur)
}
    return(
        <div>
            <div style={{display:"grid",gap:"20px",gridTemplateColumns:'repeat(3,1fr)',marginTop:"50px"}}>
                {
                    item.map((el)=>{
                        return <div key={el.id} style={{border:"2px solid grey"}}>
                                <img src={el.link} alt={el.category} width="50%"/>
                                <h4>{el.category}</h4>
                                <p>{el.desc}</p>
                                <p>{el.price}</p>
                                <Link to={`/product/${el.id}`}>More Information</Link>   
                        </div> 
                    })
                }
            </div>
            <button onClick={()=>handleClick(-1)}>Prev</button>
            <button>{page}</button>
            <button onClick={()=>handleClick(1)}>Next</button>
        </div>
    )
};
