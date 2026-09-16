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

export default function PopExit() {
  return (
    <>
      {/* <!-- pop-up start--> */}

      <PopExitOverlay id="popExit">
        <PopExitContainer>
          <PopExitBlock>
            <PopExitTtl>
              <h2>Выйти из аккаунта?</h2>
            </PopExitTtl>
            <PopExitForm id="formExit" action="#">
              <PopExitFormGroup>
                <PopExitExitYes id="exitYes">
                  <a href="modal/signin.html">Да, выйти</a>{" "}
                </PopExitExitYes>
                <PopExitExitNo id="exitNo">
                  <a href="#">Нет, остаться</a>{" "}
                </PopExitExitNo>
              </PopExitFormGroup>
            </PopExitForm>
          </PopExitBlock>
        </PopExitContainer>
      </PopExitOverlay>
    </>
  );
}
