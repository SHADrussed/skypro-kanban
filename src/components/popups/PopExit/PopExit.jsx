import { useNavigate } from "react-router-dom";
import {
  PopExitBlock,
  PopExitContainer,
  PopExitExitNo,
  PopExitExitYes,
  PopExitForm,
  PopExitFormGroup,
  PopExitOverlay,
  PopExitTtl,
} from "./PopExit.styled";

export default function PopExit({ onLogout }) {
  const navigate = useNavigate();

  function handleLogout() {
    onLogout();
    navigate("/login", { replace: true });
  }

  return (
    <>
      <PopExitOverlay id="popExit">
        <PopExitContainer>
          <PopExitBlock>
            <PopExitTtl>
              <h2>Выйти из аккаунта?</h2>
            </PopExitTtl>
            <PopExitForm id="formExit" action="#">
              <PopExitFormGroup>
                <PopExitExitYes id="exitYes" type="button" onClick={handleLogout}>
                  Да, выйти
                </PopExitExitYes>
                <PopExitExitNo id="exitNo" type="button" onClick={() => navigate("/")}>
                  Нет, остаться
                </PopExitExitNo>
              </PopExitFormGroup>
            </PopExitForm>
          </PopExitBlock>
        </PopExitContainer>
      </PopExitOverlay>
    </>
  );
}
