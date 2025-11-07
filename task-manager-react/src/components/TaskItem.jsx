// TaskItem.jsx
// Displays a single task with a checkbox and delete button

function TaskItem({ task, onToggle, onDelete }) {
  return (
    // Apply a class to the <li> when the task is completed
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      {/* Checkbox to mark the task as complete/incomplete */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      {/* Task text */}
      <span className="task-text">{task.text}</span>

      {/* Delete button (✕) removes the task */}
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        ✕
      </button>
    </li>
  );
}

export default TaskItem;
