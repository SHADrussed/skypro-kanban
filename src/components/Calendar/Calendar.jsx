import Column from "../Column/Column";
import { CalendarContent } from "./Calendar.styled";

export default function Calendar({ tasks }) {
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
