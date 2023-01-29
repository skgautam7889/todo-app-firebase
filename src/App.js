import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItems';

function App() {
    return (
        <>
            <AddTodo />
            <TodoItems />
        </>
    );
}

export default App;