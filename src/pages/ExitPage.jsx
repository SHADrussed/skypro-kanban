import MainPage from "./MainPage";
import PopExit from "../components/popups/PopExit/PopExit";

function ExitPage({ user, onLogout }) {
  return (
    <MainPage user={user}>
      <PopExit onLogout={onLogout} />
    </MainPage>
  );
}

export default ExitPage;
