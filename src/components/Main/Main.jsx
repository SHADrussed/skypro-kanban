import Calendar from "../Calendar/Calendar";
import { Container } from "../styles/common";
import { MainBlock, MainStyled } from "./Main.styled";

export default function Main({ tasks }) {
  return (
    <>
      <MainStyled>
        <Container>
          <MainBlock>
            <Calendar tasks={tasks} />
          </MainBlock>
        </Container>
      </MainStyled>
    </>
  );
}
