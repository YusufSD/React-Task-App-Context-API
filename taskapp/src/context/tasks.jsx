import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

const TasksContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  //Props
  const createTask = async (titleHolder, taskDetailsHolder) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      titleHolder,
      taskDetailsHolder,
    });
    console.log(response);
    console.log(titleHolder);

    const tasksArray = [...tasks, response.data];
    setTasks(tasksArray);
  };

  const fetchTask = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };

  //DeleteTask
  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeleteTasks = tasks.filter((task) => {
      return task.id != id;
    });
    setTasks(afterDeleteTasks);
  };

  //UpdateTask
  const updateTaskById = async (id, updatedTitle, updatedDetails) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      titleHolder: updatedTitle,
      taskDetailsHolder: updatedDetails,
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id: id,
          titleHolder: updatedTitle,
          taskDetailsHolder: updatedDetails,
        };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  const valuesAndMethods = {
    tasks,
    createTask,
    fetchTask,
    updateTaskById,
    deleteTaskById,
  };

  return (
    <TasksContext.Provider value={valuesAndMethods}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
