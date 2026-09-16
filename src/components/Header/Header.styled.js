import styled from "styled-components";
import { Button } from "../styles/common";

export const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderLogo = styled.div`
  img {
    width: 85px;
  }

display: ${({ $dark }) => $dark ? "none" : "block"};
`;

export const HeaderNav = styled.div`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderButton = styled(Button)`
  width: 178px;
  height: 30px;
  border: none;
  background-color: #565eef;
  color: #ffffff;
  font-size: 14px;
  line-height: 1;
  margin-right: 20px;
  &:hover {
    background-color: #33399b;
  }
  a {
    color: #ffffff;
  }

@media screen and (max-width: 495px) { z-index: 3; position: fixed; left: 16px; bottom: 30px; width: calc(100vw - 32px); height: 40px; margin-right: 0; }
`;

export const HeaderUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;
  &:after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }

&:hover { color: #33399b; } &:hover::after { border-left-color: #33399b; border-bottom-color: #33399b; }
`;

export const HeaderUserPopSet = styled.div`
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #fff;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;

  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
`;
