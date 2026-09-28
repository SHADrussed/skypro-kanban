import styled from "styled-components";
import { Link } from "react-router-dom";

export const AuthContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const AuthModal = styled.div`
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 375px) {
    background-color: #ffffff;
  }
`;

export const AuthBlock = styled.div`
  max-width: 368px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 60px;
  background-color: #ffffff;
  border: 0.7px solid #d4dbe5;
  border-radius: 10px;
  box-shadow: 0 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 375px) {
    padding: 0 16px;
    border: none;
    border-radius: 0;
    box-shadow: none;
  }
`;

export const AuthTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
`;

export const AuthForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AuthInput = styled.input`
  width: 100%;
  min-width: 100%;
  padding: 10px 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  outline: none;
  font-family: "Roboto", sans-serif;

  & + & {
    margin-top: 7px;
  }

  &::placeholder {
    color: #94a6be;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.28px;
  }
`;

export const AuthButton = styled.button`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #565eef;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;

  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 375px) {
    height: 40px;
  }
`;

export const AuthFormGroup = styled.div`
  text-align: center;

  p {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }
`;

export const AuthLink = styled(Link)`
  color: rgba(148, 166, 190, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;
  text-decoration: underline;
`;
