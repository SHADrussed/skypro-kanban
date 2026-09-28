import { useParams } from "react-router-dom";
import MainPage from "./MainPage";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse";

function CardPage() {
  const { id } = useParams();

  return <PopBrowse cardId={id} />;
}

export default CardPage;
