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

    return(
        showForm ? (
        <div className="mx-6 my-2">
        <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-4 rounded-4xl bg-card border-blue border-1 text-textcol shadow transition"
        >
        <label className="flex flex-col gap-2 text-lg sm:text-xl">
          New Task:
          <input
            type="text"
            name="task"
            value={taskInput}
            placeholder="Enter new Task"
            onChange={(e) => setTaskInput(e.target.value)}
            required
            className="p-2 rounded-lg border border-gray-300 focus:outline-none text-sm sm:text-base"
          />
        </label>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={handleToggle}
            className="sm:text-base text-sm text-center px-3 sm:px-4 py-1 sm:py-2 rounded-4xl bg-red-100 text-red-600 hover:bg-red-200 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={!taskInput.trim()}
            className={`sm:text-base text-sm text-center px-3 sm:px-4 py-1 sm:py-2 rounded-4xl transition
              ${!taskInput.trim() 
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                : 'bg-green text-white hover:bg-blue/80'}`}
>
            Add
          </button>
        </div>
      </form>
      </div> ) : (
        <div className="mx-6 my-2">
            <button
              type="button"
              onClick={handleToggle}
              className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-4xl bg-card text-textcol text-lg sm:text-xl border-blue border-1 cursor-pointer hover:bg-blue/10 transition w-full"
            >
              <span className="w-5 h-5 flex items-center justify-center text-blue text-xl font-bold">+</span>
              <span className="text-base sm:text-xl">Add New Task</span>
            </button>
        </div>
      )
    );
}