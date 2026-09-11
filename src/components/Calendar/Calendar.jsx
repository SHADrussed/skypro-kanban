import Column from "../Column/Column";

export default function Calendar({ user }) {
  return (
    <div className="main__content">
      {user.columns.map((column) => (
        <Column key={column.id} column={column} />
      ))}
    </div>
  );
}
