import TaskView from "./TaskView";
import { useContext } from "react";
import TasksContext from "../context/tasks";

function TaskList() {
  const { tasks } = useContext(TasksContext);

  return (
    <div className="taskList">
      {tasks.map((task, index) => {
        return <TaskView key={index} task={task} />;
      })}
    </div>
  );
}

export default TaskList;
