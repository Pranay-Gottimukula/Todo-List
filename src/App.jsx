import './App.css'
import { useState } from 'react'
import TodoList from './components/TodoList/TodoList'
import ToggleForm from './components/ToggleForm/ToggleForm';


function App() {
  const [todos, setTodos] = useState([
    { label: "groceries", id: 20250715162701 ,done: true },
    { label: "assignments", id: 20250715162702, done: false },
    { label: "exercise", id: 20250715162703, done: false },
    { label: "reading", id: 20250715162704, done: false }
  ]);

  function toggleTodo(id) {
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updated);
  }

  function handleEdit(id, newLabel) {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, label: newLabel } : todo
    ));
  }

  function handleDelete(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function getCurrentTimestamp() {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(now.getDate()).padStart(2, '0');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${year}${month}${day}${hours}${minutes}${seconds}`;
  }

  

  return (
    <>
    <h1 className='text-5xl text-textcol bg-card font-bold p-4'>To-Do List</h1>
    <div className='flex flex-col items-center'>
      <div className="w-full max-w-xl my-3 px-4">
        <TodoList status={'Due'} todos={todos} toggleTodo={toggleTodo} toggleEdit={handleEdit} toggleDelete={handleDelete}/>
        <ToggleForm todos={todos} setTodos={setTodos} getCurrentTimestamp={getCurrentTimestamp} />
        <hr className='text-card m-5'/>
        <TodoList status={'Completed'} todos={todos} toggleTodo={toggleTodo} toggleEdit={handleEdit} toggleDelete={handleDelete}/>
      </div>
    </div>
    </>
  )
}

export default App
