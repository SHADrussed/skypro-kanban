import { useParams } from "react-router-dom";
import MainPage from "./MainPage";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse";

function CardPage({ user }) {
  const { id } = useParams();

  return (
    <MainPage user={user}>
      <PopBrowse user={user} cardId={id} />
    </MainPage>
  );
}

export default CardPage;
