import { useContext } from "react";
import Column from "../Column/Column";
import { CalendarContent } from "./Calendar.styled";
import { TasksContext } from "../../contexts/TaskContext";

export default function Calendar() {
  const { tasks } = useContext(TasksContext);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const columns = statuses.map((status) => {
    return {
      title: status,
      cards: tasks.filter((task) => task.status === status),
    };
  });

  return (
    <CalendarContent>
      {columns.map((column) => (
        <Column key={column.title} column={column} />
      ))}
    </CalendarContent>
  );
}
