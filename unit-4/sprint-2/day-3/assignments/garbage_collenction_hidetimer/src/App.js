import {useState,useEffect} from "react"
import './App.css';
function Timer(){
  const [count,setCount]=useState(10);
  //when button is hide then how to stop the timer 
  useEffect(()=>{
   const timerid= setInterval(()=>{
    console.log(12)
      setCount((prev)=>{
        if(prev===1){
          clearInterval(timerid)
          return 0
        }
         return prev-1
      })
     
    },1000)
    const cleanup=()=>{
      console.log("cleanup")
      clearInterval(timerid)
    }  
      return cleanup
  },[])

  return <div><h2>Timer</h2><h3>{count}</h3></div>
}
function App() {
const [show,setShow]=useState(false);


  return (
    <div className="App">
     
      {show && <Timer/>}
      <button onClick={()=>setShow(!show)}>{show?"HIDE TIMER":"SHOW TIMER"}</button>

    </div>
  );
}

export default App;
