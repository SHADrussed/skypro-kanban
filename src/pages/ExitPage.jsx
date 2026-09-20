import MainPage from "./MainPage";
import PopExit from "../components/popups/PopExit/PopExit";

function ExitPage({ onLogout }) {
  return (
    <MainPage>
      <PopExit onLogout={onLogout} />
    </MainPage>
  );
}

export default ExitPage;
