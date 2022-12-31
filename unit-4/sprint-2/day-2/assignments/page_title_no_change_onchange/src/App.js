
import './App.css';
import {useEffect,useState} from "react";
function App() {
  const [count,setcount]=useState(0);

  useEffect(()=> {
   console.log("hello")
   document.title=`You click ${count} times`
  })

  return (
    <div className="App">
    <h1>Count : {count}</h1>
    <button onClick={()=>setcount(count+1)}>INCREASE</button>
    </div>
  );
}

export default App;
