import { useState } from "react";

function getData(){
  return fetch("https://jsonplaceholder.typicode.com/posts?_limit=10").then((res)=>res.json()).catch((err)=>console.log(err))
  
}
 function Posts(){
    const[post,setpost]=useState([]);

    async function fetchData(){
        try{
            let data=await getData()
            setpost(data)
           
        }catch(err){
            console.log(err)
        }
    }console.log(post)


    return (
        <>
        <h1>Posts</h1>
        <button onClick={fetchData}>Get Posts</button>
        <ul>
            {post.map((el)=>{
            return <div key={el.id}>
                <li>{el.id}</li> <li>{el.title}</li> </div>
                    
            })}
        </ul>
        </>
    )
}

export default Posts;