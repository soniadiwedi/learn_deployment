import logo from './logo.svg';
import "./App.css"
import Admin from './Pages/Admin';
import'./App.css'
import Home from './Pages/Home';
import MainRoutes from './Pages/MainRoutes';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
        <MainRoutes/>
    </div>
  );
}

export default App;
