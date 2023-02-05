
import './App.css';
import Counter from './components/Counter';
import { Navbar } from './components/Navbar';
import Todolist from './components/Todolist';
import AllRoutes from './pages/AllRoutes';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Todolist/> */}
     <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
