
import './App.css';
import {useState} from "react";
function App() {
const [count,setcount]=useState(0);
function Depositfun(amt){
  setcount((prev)=>prev+amt);
  setcount((prev)=>prev+amt);
  setcount((prev)=>prev+amt);
  setcount((prev)=>prev+amt);
  console.log(amt)
}

  return (
    <div className="App">
      <h1>Amount {count}</h1>
     <button onClick={()=>Depositfun(100)}>deposit 100</button>
  
    </div>
  );
}

export default App;
