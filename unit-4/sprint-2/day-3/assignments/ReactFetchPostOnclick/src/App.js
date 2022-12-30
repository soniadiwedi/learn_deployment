import "./App.css";
import { useEffect, useState } from "react";
import Post from "./Components/Post"

// function getData(){
//   return fetch("").then((res)=>res.json()).catch((err)=>console.log(err))
  
// }
function App() {
  const[post,setpost]=useState([]);

  const displayTodo=async()=>{
    try{
      let res=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
      let data=await res.json();
      setpost(data)
      console.log(data)
    }catch(err){
        console.log(err)
    }
  }

  useEffect (()=>{
   
  },[])
 
  ////////////////////////////////////////////////////////////////
  return (
    <div className="App" data-testid="app">
      <button onClick={displayTodo}
        id="get-posts-btn"
      >
        GET POSTS
      </button>
      <div id="post-container">
        {
          post.map((el)=>{
            return <Post key={el.id} title={el.title} body={el.body}/>
          })
        }
        
      </div>
    </div>
  );
}

export default App;
