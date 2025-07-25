import ListItems from "../ListItems/ListItems";
import './TodoList.css';

export default function TodoList({status, todos, toggleTodo, toggleEdit, toggleDelete}){
    const filteredTodos = status==="Due" ? todos.filter((todo) => !todo.done) : todos.filter((todo) => todo.done);

    return(
        <>
        <div className="px-6">
            <h2 className="text-xl text-textcol">{status}:</h2>
            
            {filteredTodos.map((todo) => (
                <div key={todo.id}>
                    <ListItems 
                    label={todo.label}
                    value={todo.done}
                    id={todo.id}
                    status={status}
                    onToggle={() => toggleTodo(todo.id)}
                    onEdit={toggleEdit}
                    onDelete={toggleDelete}
                    ></ListItems>
                </div>
            ))}
        </div>
        </>
    )
};