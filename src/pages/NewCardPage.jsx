import MainPage from "./MainPage";
import PopNewCard from "../components/popups/PopNewCard/PopNewCard";

function NewCardPage({ user }) {
  return (
    <MainPage user={user}>
      <PopNewCard user={user} />
    </MainPage>
  );
}

export default NewCardPage;
