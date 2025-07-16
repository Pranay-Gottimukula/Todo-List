import { useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';

export default function ListItems({ id, label, value, onToggle, onEdit, onDelete }) {
  const [taskInput, setTaskInput] = useState(label);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditSubmit(e) {
    e.preventDefault();
    onEdit(id, taskInput);
    setIsEditing(false);
  }

  function handleCancelEdit() {
    setTaskInput(label); // Reset input
    setIsEditing(false);
  }

  return (
    <div>
      {!isEditing ? (
        <div className="flex justify-center w-full">
          <div className="relative group w-full max-w-xl">
            <label className="flex items-center gap-3 p-3 my-2 rounded-lg border-blue border-1 bg-card text-textcol cursor-pointer hover:bg-blue/10 transition">
              <input
                type="radio"
                checked={value}
                onClick={onToggle}
                className="accent-blue w-5 h-5 cursor-pointer"
              />
              <span className="text-xl">{label}</span>
            </label>

            {/* Hover icons */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 hidden group-hover:flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="p-1 rounded hover:bg-blue/20 transition"
              >
                <Pencil size={18} className="text-blue" />
              </button>
              
              <button
                onClick={() => onDelete(id)}
                className="p-1 rounded hover:bg-red/20 transition"
              >
                <Trash2 size={18} className="text-red-500" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className=" my-2">
          <form
            onSubmit={handleEditSubmit}
            className="flex flex-col gap-4 p-4 rounded-lg bg-card border-blue border-1 text-textcol shadow transition"
          >
            <label className="flex flex-col gap-2 text-xl">
              Task:
              <input
                type="text"
                name="task"
                value={taskInput}
                placeholder="Enter the Task"
                onChange={(e) => setTaskInput(e.target.value)}
                required
                className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue"
              />
            </label>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={handleCancelEdit}
                className="text-center px-4 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={!taskInput.trim()}
                className={`text-center px-4 py-2 rounded-lg transition ${
                  !taskInput.trim()
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-green text-white hover:bg-blue/80'
                }`}
              >
                Done
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
