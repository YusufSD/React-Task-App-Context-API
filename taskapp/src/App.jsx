import "./App.css";
import { useContext, useEffect } from "react";
import TaskCreate from "./companents/taskcreate";
import TaskList from "./companents/TaskList";
import TasksContext from "./context/tasks";

function App() {
  const { fetchTask } = useContext(TasksContext);

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevler</h1>
      <TaskList />
    </div>
  );
}

export default App;
