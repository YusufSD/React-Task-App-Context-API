import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/tasks";

function TaskCreate({ task, taskFormUpdate, onUpdate }) {
  const { createTask, updateTaskById } = useContext(TasksContext);

  const [title, setTitle] = useState(task ? task.titleHolder : "");
  const [taskDetails, setTaskDetails] = useState(
    task ? task.taskDetailsHolder : ""
  );

  //onChangeTitle
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  //onChangeText
  const handleTaskChange = (event) => {
    setTaskDetails(event.target.value);
  };

  //Create Button
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDetails);
    } else {
      createTask(title, taskDetails);
    }

    setTitle("");
    setTaskDetails("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <label className="taskText">Lütfen Görevi Düzenleyiniz!</label>
          <form className="taskCreateForm">
            <label className="taskLabel">Başlık Düzenle</label>
            <input
              value={title}
              onChange={handleChange}
              className="taskInput"
            />
            <label className="taskLabel">Görev Detaylarını Düzenle</label>
            <textarea
              value={taskDetails}
              onChange={handleTaskChange}
              className="taskInput"
              rows={5}
              style={{ resize: "none" }}
            ></textarea>
            <button
              onClick={handleSubmit}
              className="createButton updateButton"
            >
              Güncelle
            </button>
          </form>
        </div>
      ) : (
        <div className="card">
          <div className="taskCreateDiv">
            <label className="taskText">GÖREV EKLEYİNİZ!</label>
            <form className="taskCreateForm">
              <label className="taskLabel">Başlık Giriniz</label>
              <input
                value={title}
                onChange={handleChange}
                className="taskInput"
              />
              <label className="taskLabel">Görev Detayları</label>
              <textarea
                value={taskDetails}
                onChange={handleTaskChange}
                className="taskInput"
                rows={5}
                style={{ resize: "none" }}
              ></textarea>
              <button onClick={handleSubmit} className="createButton">
                Oluştur
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
