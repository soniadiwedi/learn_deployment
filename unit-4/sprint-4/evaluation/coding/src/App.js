import "./App.css";
import {Button} from "@chakra-ui/react"
import {useState} from "react"
import Form from "./Components/Form/Form"
import Dashboard from "./Components/Dashboard/Dashboard";
function App() {
 
  let [state,setState]=useState(true)
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;

  return <div className="App">
{
  state
}
      <Button width = "150px"className = "toggleForm" onClick={()=>setState(state?false:true)}  >
        Toggle Form  
      </Button>


      {
        state?<Dashboard/>: <Form/>
      }
     

  </div>;
}

export default App;