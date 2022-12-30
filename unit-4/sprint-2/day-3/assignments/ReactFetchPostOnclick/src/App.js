import "./App.css";
import { useState } from "react";
import Post from "./Components/Post"
function App() {
  const[post,setpost]=useState([]);

 async function displayTodo(){
  let url="https://jsonplaceholder.typicode.com/posts"
    try{
      let res=await fetch(url)
      let data=await res.json();
      setpost(data)
      console.log(data)
    }catch(err){
        console.log(err)
    }
  }
  ////////////////////////////////////////////////////////////////
  return (
    <div className="App" data-testid="app">
      <button id="get-posts-btn"
      onClick={()=>displayTodo()}>
        GET POSTS
      </button>
      <div id="post-container">
        {
          post.map((el)=>{
            return <Post id={el.id} title={el.title} body={el.body}/>
          })
        }
        
      </div>
    </div>
  );
}

export default App;
