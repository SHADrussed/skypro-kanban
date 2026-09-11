import Card from "../Card/Card";

export default function Column({ column }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{column.title}</p>
      </div>
      <div className="cards">
        {column.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
