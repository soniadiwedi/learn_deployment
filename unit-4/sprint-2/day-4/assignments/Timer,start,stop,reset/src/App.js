import Timer from "./Timer"
import './App.css';
import{useState,useEffect} from "react"

function App() {
  const [show,setShow]=useState(true);
  
  
    return (
      <div className="App">
       {show && <Timer/>}
       <button onClick={()=>setShow(!show)}>{show ? "Hide Timer ":"Show Timer"}</button>
      </div>
    );
  }

export default App;
