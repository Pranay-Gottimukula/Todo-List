import { useRef, useState, useEffect } from 'react';
import { Pencil, Trash2, MoreVertical } from 'lucide-react';

export default function ListItems({ id, label, value, status, onToggle, onEdit, onDelete }) {
  const [taskInput, setTaskInput] = useState(label);
  const [isEditing, setIsEditing] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleEditSubmit(e) {
    e.preventDefault();
    onEdit(id, taskInput);
    setIsEditing(false);
  }

  function handleCancelEdit() {
    setTaskInput(label); // Reset input
    setIsEditing(false);
  }

  function handleDelete(e) {
    e.preventDefault();
    onDelete(id);
  }

  return (
    <div>
      {!isEditing ? (
        <div className="flex justify-center w-full">
          <div className="relative group w-full max-w-xl">
            <label
              className={`flex items-center gap-3 p-3 my-2 rounded-4xl border-blue border-1 bg-card text-textcol cursor-pointer transition ${
                status === 'Completed'
                  ? 'opacity-50 cursor-default'
                  : 'hover:bg-blue/10'
              }`}
            >
              <input
                type="radio"
                checked={value}
                onClick={onToggle}
                className="accent-blue w-5 h-5 cursor-pointer"
              />
              <span className="text-xl">{label}</span>
            </label>

            {/* Three Dots Icon with Inline Menu */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 z-50">
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="p-1 rounded-4xl hover:bg-gray-600 transition"
                >
                  <MoreVertical size={20} className="text-gray-200" />
                </button>

                {showMenu && (
                  <div className="absolute top-3 right-full z-50 bg-bgcol rounded-2xl shadow-2xl text-sm w-28 px-1 py-1.5">
                    <button
                      onClick={() => {
                        setIsEditing(true);
                        setShowMenu(false);
                      }}
                      className="flex gap-2 items-center text-base w-full text-left px-4 py-2 hover:bg-gray-700 hover:rounded-2xl text-blue-600"
                    >
                      <Pencil size={15} />
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        handleDelete(e);
                        setShowMenu(false);
                      }}
                      className="flex gap-2 items-center text-base w-full text-left px-4 py-2 hover:bg-gray-700 hover:rounded-2xl text-red-600"
                    >
                      <Trash2 size={15} />
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="my-2">
          <form
            onSubmit={handleEditSubmit}
            className="flex flex-col gap-4 p-4 rounded-4xl bg-card border-blue border-1 text-textcol shadow transition"
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
                className="text-center px-4 py-2 rounded-4xl bg-red-100 text-red-600 hover:bg-red-200 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={!taskInput.trim()}
                className={`text-center px-4 py-2 rounded-4xl transition ${
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
