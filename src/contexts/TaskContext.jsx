import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createTask, getTasks, deleteTask, updateTask } from "../services/api";

const TasksContext = createContext();

function TasksProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function addTask(taskData) {
    setError("");
    try {
      const data = await createTask(taskData, user.token);

      setTasks(data.tasks);
    } catch (error) {
      setError("Не удалось создать задачу");
      throw error;
    }
  }

  async function removeTask(taskId) {
    setError("");
    try {
      const data = await deleteTask(taskId, user.token);

      setTasks(data.tasks);
    } catch (error) {
      setError("Не удалось удалить задачу");
      throw error;
    }
  }

  async function editTask(taskId, taskData) {
    setError("");
    try {
      const data = await updateTask(taskId, taskData, user.token);

      setTasks(data.tasks);
    } catch (error) {
      setError("Не удалось изменить задачу");
      throw error;
    }
  }

  useEffect(() => {
    if (!user?.token) return;

    async function fetchTasks() {
      setError("");
      try {
        const fetchedTasks = await getTasks(user.token);
        setTasks(fetchedTasks.tasks);
      } catch (error) {
        setError("Проблема с загрузкой");
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, [user?.token]);

  return (
    <TasksContext.Provider
      value={{ tasks, loading, error, addTask, removeTask, editTask }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export { TasksContext, TasksProvider };
