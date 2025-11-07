import { useState } from "react";
import "./App.css";
import "./styles.css"; // bring in the styles from Assignment 1

// bring in the components we created
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskCounter from "./components/TaskCounter";

// bring in the icons from our assets
import menuIcon from "./assets/menu_icon.png";
import searchIcon from "./assets/search_icon.png";
import checkIcon from "./assets/check_icon.png";
import inboxIcon from "./assets/inbox_icon.png";
import calendarIcon from "./assets/calendar_icon.png";
import upcomingIcon from "./assets/upcoming_icon.png";

function App() {
  // state management
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // adding a new task
  const addTask = (text) => {
    if (!text.trim()) return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  // toggling task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // deleting a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // filtering the tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true; // all
  });

  return (
    <div className="page">
      {/* here is the header */}
      <header className="site-header">
        <button className="menu-button">
          <img src={menuIcon} alt="Menu" />
        </button>

        <div className="search-container">
          <img className="search-icon" src={searchIcon} alt="Search Icon" />
          <input
            className="search-input"
            type="search"
            placeholder="Quick Find"
          />
        </div>

        <div className="site-header_status">
          <img className="check-icon" src={checkIcon} alt="Check Icon" />
          <TaskCounter tasks={tasks} filter={filter} />
        </div>
      </header>

      {/* this is the main content area */}
      <main className="site-main">
        {/* and this is the sidebar */}
        <aside className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <img className="nav-icon" src={inboxIcon} alt="Inbox" />
              <strong>Inbox</strong>
              <small className="nav-count">{tasks.length}</small>
            </li>

            <li className="nav-item">
              <img className="nav-icon" src={calendarIcon} alt="Today" />
              <strong>Today</strong>
              <small className="nav-count">
                {tasks.filter((t) => !t.completed).length}
              </small>
            </li>

            <li className="nav-item">
              <img className="nav-icon" src={upcomingIcon} alt="Upcoming" />
              <strong>Upcoming</strong>
            </li>
          </ul>
        </aside>

        {/* main task area */}
        <section className="main-content">
          <h1>Inbox</h1>

          {/* filter buttons */}
          <div className="filter-buttons">
            <button
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={filter === "active" ? "active" : ""}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
            <button
              className={filter === "completed" ? "active" : ""}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </div>

          {/* task summary showing filtered count */}
          <p className="task-summary">
            {filteredTasks.length} of {tasks.length} tasks
          </p>

          {/* task form */}
          <TaskForm onAddTask={addTask} />

          {/* task list */}
          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
