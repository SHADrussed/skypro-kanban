import Column from "../Column/Column";
import { CalendarContent } from "./Calendar.styled";

export default function Calendar({ tasks }) {
  return (
    <CalendarContent>
      {tasks.length > 0 ? (
        tasks.map((column) => <Column key={column.id} column={column} />)
      ) : (
        <h1>Добавьте задачу!</h1>
      )}
    </CalendarContent>
  );
}
