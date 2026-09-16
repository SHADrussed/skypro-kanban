import Column from "../Column/Column";
import { CalendarContent } from "./Calendar.styled";

export default function Calendar({ user }) {
  return (
    <CalendarContent>
      {user.columns.map((column) => (
        <Column key={column.id} column={column} />
      ))}
    </CalendarContent>
  );
}
