
import './App.css';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
     <Counter/>
     <h1>Todo App</h1>
     <TodoList/>
    </div>
  );
}

export default App;
