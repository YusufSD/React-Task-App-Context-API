import { useState } from "react";
import TaskCreate from "./taskcreate";
import { useContext } from "react";
import TasksContext from "../context/tasks";

function TaskView({ task }) {
  const { deleteTaskById, updateTaskById } = useContext(TasksContext);

  const [showUpdate, setShowUpdate] = useState(false);
  const deleteTask = () => {
    deleteTaskById(task.id);
  };

  const updateTask = () => {
    setShowUpdate(!showUpdate);
  };

  const handleSubmit = (id, updatedTitle, updatedDetails) => {
    setShowUpdate(false);
    updateTaskById(id, updatedTitle, updatedDetails);
  };

  return (
    <div className="taskView">
      {showUpdate ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="taskTitle">Göreviniz</h3>
          <p>{task.titleHolder}</p>
          <h3 className="taskTitle">Yapılacaklar</h3>
          <p>{task.taskDetailsHolder}</p>
          <div>
            <button className="taskDelete" onClick={deleteTask}>
              Sil
            </button>
            <button className="taskUpdate" onClick={updateTask}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskView;
