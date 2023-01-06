import { useState, useEffect  } from "react";
import { Link,useSearchParams } from "react-router-dom";


export default function Users() {
   const[post,setpost]=useState([]);
   const[serchparam,setsearchparms]=useSearchParams()
   const[page,setpage]=useState(1)


   async function fetchdata(page){
        try{
            let res=await fetch(`https://reqres.in/api/users?page=${page}`)
            let data=await res.json()
            setpost(data.data)
            console.log(data.data)
        }catch(err){
            console.log(err)
        }
   }

   useEffect(()=>{
    fetchdata(page)
   },[page])
   //----------USE SEARCH PARAM-------------------
   useEffect(()=>{
        setsearchparms({query:page})
   },[page])
  ////////////////////////////////////////////////////////////
  function handleClick(val){
    const change=page+val;
    setpage(change)
  } 
    return (

        <div>
        <div style={{display:'flex',justifyContent:'space-around',margin:'50px',gap:"20px"}}>
           
            {
                post.map((el)=>{
                    return <div key={el.id} style={{border:'solid 1px black'}}>
                        <img src={el.avatar} alt={el.first_name} />
                        <p>{el.first_name}{el.last_name}</p>
                        <p>{el.email}</p>
                        <Link to={`/users/${el.id}`}>More info</Link>   
                    </div>
                })  
                
            }
            
        </div>
        <button disabled={page==1} onClick={()=>handleClick(-1)}>Previous</button>
            <button disabled={page==1}>{page}</button>
            <button onClick={()=>handleClick(1)}>Next</button>
        </div>
    )
};
