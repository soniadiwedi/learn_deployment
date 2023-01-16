import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
function App() {

  // TODO: Remove below const and instead import them from chakra
  const Button = () => <div />;

  return <div className="App">
      <Button width = "150px"className = "toggleForm" >
        Toggle Form  
      </Button>
      <Dashboard/>

  </div>;
}

export default App;
