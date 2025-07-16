import ListItems from "../ListItems/ListItems";
import './TodoList.css';

export default function TodoList({status, todos, toggleTodo, toggleEdit}){
    const filteredTodos = status==="Due" ? todos.filter((todo) => !todo.done) : todos.filter((todo) => todo.done);

    return(
        <>
        <div className="px-6">
            <h2 className="text-3xl pr-text">{status}:</h2>
            
            {filteredTodos.map((todo) => (
                <div key={todo.id}>
                    <ListItems 
                    label={todo.label}
                    value={todo.done}
                    id={todo.id}
                    onToggle={() => toggleTodo(todo.id)}
                    onEdit={toggleEdit}
                    ></ListItems>
                </div>
            ))}
        </div>
        </>
    )
};