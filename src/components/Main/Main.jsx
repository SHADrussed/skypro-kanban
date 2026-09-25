import Calendar from "../Calendar/Calendar";
import { Container } from "../styles/common";
import { MainBlock, MainStyled } from "./Main.styled";

export default function Main() {
  return (
    <>
      <MainStyled>
        <Container>
          <MainBlock>
            <Calendar />
          </MainBlock>
        </Container>
      </MainStyled>
    </>
  );
}
