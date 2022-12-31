import {useState,useEffect} from "react";
import './App.css';

function App() {
  const[count,setcount]=useState(10);
 useEffect (()=>{
  let timerid=setTimeout(()=>{
    setcount((prev)=>{
      return prev-1
    })
  },1000)
  if(count===0){
    return clearTimeout(timerid)
  }
 })

  return (
    <div className="App">
      <h1>Timer</h1>
      <h2>{count}</h2>
    </div>
  );
}

export default App;
