import ListItems from "../ListItems/ListItems";
import './TodoList.css';

export default function TodoList({status, todos, toggleTodo}){
    const filteredTodos = status==="Due" ? todos.filter((todo) => !todo.done) : todos.filter((todo) => todo.done);
    return(
        <>
        <div className="p-4">
            <h2 className="text-3xl pr-text">{status}:</h2>
            
            {filteredTodos.map((todo) => (
                <div key={todo.id}>
                    <ListItems 
                    label={todo.label}
                    value={todo.done}
                    onToggle={() => toggleTodo(todo.id)}
                    ></ListItems>
                </div>
            ))}
        </div>
        </>
    )
};