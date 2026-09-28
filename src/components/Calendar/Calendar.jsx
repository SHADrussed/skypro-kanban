import { useContext } from "react";
import Column from "../Column/Column";
import { CalendarContent, EmptyState } from "./Calendar.styled";
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

  if (tasks.length === 0) {
    return <EmptyState>Новых задач нет</EmptyState>;
  }

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
