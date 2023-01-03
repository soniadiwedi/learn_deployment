import {useState,useRef} from "react"
import './App.css';

function App() {
  const[inputval,setinput]=useState("");
  const inputRef=useRef(null);
/////////////////////////////////////////////////////
  const handleAdd=()=>{
    inputRef.current.focus();
  }
  console.log(inputRef.current)
  return (
    <div className="App">
      <input 
      ref={inputRef}
      type="text" 
      placeholder="add new todo" 
      value={inputval}
      onChange={(e)=>setinput(e.target.value)}/>
      <button onClick={handleAdd}>ADD TASK</button>
    </div>
  );
}

export default App;
