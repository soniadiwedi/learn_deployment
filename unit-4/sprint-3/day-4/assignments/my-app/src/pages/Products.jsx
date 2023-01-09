import { useEffect } from "react";
import { useState } from "react"
import { Link, useSearchParams } from "react-router-dom";


function getCurrentPageUrl(value){
     value=Number(value)
    if(typeof value==='number' && value<=0){
        value=1
    }
    if(!value){
        value=1
    }
    return value
};

export default function Products() {
    const[item,setitem]=useState([]);
    const[param,setparam]=useSearchParams()
    const[page,setpage]=useState(getCurrentPageUrl(param.get("query"))||1)
    const[sort,setsort]=useState("")
    let limit=3
    async function fetchData(){
        try{
            let res=await fetch(`http://localhost:3000/products/?_page=${page}&_limit=${limit}`)
            let data=await res.json()
            console.log(data)
            setitem(data)
        }catch(err){

        }
    }
    useEffect(()=>{
        fetchData(page)
    },[page])
    /////////////////////////////////////////////////
  


    useEffect(()=>{
        let paramobj={query:page}
        setparam(paramobj)
    },[page])
    return (
        <>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'30px',marginTop:'50px'}}>
           {
            item?.map((el)=>{
                return <div key={el.id} style={{border:'2px solid grey'}}>
                    <img src={el.image} alt={el.category} width="20%" />
                    <p>{el.category}</p>
                    <p>{el.title}</p>          
                    <p>{el.price}</p>
                    <Link to={`/products/${el.id}`}>More Information</Link>
                </div>
            })

           }

        </div>
            <select onChange={handleSort} value={sort}>
                <option >Sort By Price</option>
               

            </select>
           <button onClick={()=>setpage(page-1)}>Prev</button>
           <button>{page}</button>
           <button onClick={()=>setpage(page+1)}>Next</button>
        </>
    )
};
