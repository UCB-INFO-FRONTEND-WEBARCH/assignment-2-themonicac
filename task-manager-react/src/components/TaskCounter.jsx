function TaskCounter({ tasks, filter }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const active = total - completed;

  let text = "";
  if (filter === "all") text = `${total} tasks total`;
  if (filter === "active") text = `${active} active`;
  if (filter === "completed") text = `${completed} completed`;

  return (
    <div className="site-header_status">
      <span>{text}</span>
    </div>
  );
}

export default TaskCounter;
