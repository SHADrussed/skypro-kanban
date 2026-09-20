import styled from "styled-components";
import { Link } from "react-router-dom";

const Page = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;

  background: #eaeef6;
`;

const Code = styled.h1`
  margin: 0;

  font-size: 72px;
`;

function NotFoundPage() {
  return (
    <Page>
      <Code>404</Code>

      <p>Страница не найдена</p>

      <Link to="/">На главную</Link>
    </Page>
  );
}

export default NotFoundPage;
