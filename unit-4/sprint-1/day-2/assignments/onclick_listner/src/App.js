
import './App.css';
import Button from './components/Button';
function App() {
  const handleButtonsClick=()=>{
    alert("You clicked Masai!")
  }
  return (
    <div className="App">
     <h1>hii</h1>
       <Button text="Masai" handleButtonsClick={handleButtonsClick}/> 
    </div>
  );
}

export default App;
