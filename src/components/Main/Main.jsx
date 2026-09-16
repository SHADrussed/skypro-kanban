import Calendar from "../Calendar/Calendar";
import { Container } from "../styles/common";
import { MainBlock, MainStyled } from "./Main.styled";

export default function Main({ user }) {
  return (
    <>
      <MainStyled>
        <Container>
          <MainBlock>
            <Calendar user={user} />
          </MainBlock>
        </Container>
      </MainStyled>
    </>
  );
}
