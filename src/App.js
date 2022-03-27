import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import SearchTask from "./components/SearchTask";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasksList")) || [
      { id: 1, title: "My First Task", checked: false },
    ]
  );
  const [newTask, setNewTask] = useState("");
  const [search, setSearch] = useState("");

  const addTask = (title) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const myNewTask = { id: id, title: title, checked: false };
    const tasksList = [...tasks, myNewTask];
    setTasks(tasksList);
    localStorage.setItem("tasksList", JSON.stringify(tasksList));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!newTask) return;
    addTask(newTask);
    setNewTask("");
  };

  const handleCheck = (id) => {
    const tasksList = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(tasksList);
    localStorage.setItem("tasksList", JSON.stringify(tasksList));
  };

  const handleDelete = (id) => {
    const tasksList = tasks.filter((task) => task.id !== id);
    setTasks(tasksList);
    localStorage.setItem("tasksList", JSON.stringify(tasksList));
  };

  return (
    <div className="App">
      <div className="InputBar">
        <AddTask newTask={newTask} setNewTask={setNewTask} handleOnSubmit={handleOnSubmit} />
        <SearchTask search={search} setSearch={setSearch} />
      </div>
      <Content
        tasks={tasks.filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={tasks.length} />
    </div>
  );
}

export default App;
