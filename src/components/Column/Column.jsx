import Card from "../Card/Card";
import { CalendarColumn, CalendarColumnTitle, Cards } from "./Column.styled";

export default function Column({ column }) {
  return (
    <CalendarColumn>
      <CalendarColumnTitle>
        <p>{column.title}</p>
      </CalendarColumnTitle>
      <Cards>
        {column.cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </Cards>
    </CalendarColumn>
  );
}
