import logo from './logo.svg';
import './App.css';
import Navbar from './Routes/Navbar';
import AllRoutes from './Routes/AllRoutes';
import CartpageProvider from './context/CartpageProvider';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <AllRoutes/>
     
     
    </div>
  );
}

export default App;
