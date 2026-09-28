import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  min-height: ${({ $fullScreen }) => ($fullScreen ? "100vh" : "200px")};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #e3e3e3;
  border-top-color: #565eef;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export default function Loader({ fullScreen = false }) {
  return (
    <LoaderWrapper $fullScreen={fullScreen}>
      <Spinner />
    </LoaderWrapper>
  );
}
