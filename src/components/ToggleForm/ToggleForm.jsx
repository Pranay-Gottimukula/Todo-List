import { use, useState } from "react";

export default function ToggleForm({todos, setTodos, getCurrentTimestamp}){
    const [showForm, setShowForm] = useState(false);
    const [taskInput, setTaskInput] = useState('')

    function handleToggle(){
        setShowForm(!showForm);
    };

    function handleSubmit(e){
        e.preventDefault()
        const updatedTodos = [...todos, { label: taskInput, id: getCurrentTimestamp(), done: false }];
        setTodos(updatedTodos);
        setTaskInput('');
        setShowForm(false);
    };

    if(showForm === true){
        return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task:
                <input type="text" name="task" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} required/>
            </label>
            <input type="button" value="Cancel" onClick={handleToggle}/>
            <input type="submit" value="Submit"/>
        </form>
        </>
        );
    }
    else{
        return(
        <div>
        <button className='flex items-center m-3 gap-3 p-3 rounded-lg bg-card text-textcol cursor-pointer hover:bg-blue/10 transition' 
        type='button' onClick={handleToggle}> + Add New Task</button>
        </div>
        );
    }
};