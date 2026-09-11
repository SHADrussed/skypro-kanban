import Calendar from "../Calendar/Calendar";

export default function Main({ user }) {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__block">
            <Calendar user={user} />
          </div>
        </div>
      </main>
    </>
  );
}
