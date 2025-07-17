export default function Navbar() {
  function handleClearTodos() {
    const confirmClear = window.confirm("Are you sure you want to clear all todos? This action cannot be undone.");
    if (confirmClear) {
      localStorage.removeItem("todos");
      window.location.reload(); // Optional: refresh to reflect changes
    }
  }

  return (
    <div className="flex justify-between items-center bg-card text-textcol px-4 py-4">
      <h1 className="text-3xl sm:text-4xl font-bold">To-Do List</h1>

      <button
        onClick={handleClearTodos}
        className="text-sm sm:text-base px-2 py-2 rounded-xl border-none hover:bg-gray-600 hover:text-white transition"
      >
        Clear List
      </button>
    </div>
  );
}
