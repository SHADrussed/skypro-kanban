import Calendar from "../Calendar/Calendar";
import PopBrowse from "../popups/PopBrowse/PopBrowse";
import PopNewCard from "../popups/PopNewCard/PopNewCard";

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
