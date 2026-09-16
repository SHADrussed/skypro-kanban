import styled from "styled-components";

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
  @media screen and (max-width: 495px) {
    height: 37px;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  @media screen and (max-width: 660px) {
    border-radius: 0;
  }
  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  & button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }
  @media screen and (max-width: 495px) {
    & button {
      width: 100%;
      height: 40px;
    }
  }
  > div button {
    margin-right: 8px;
  }
  @media screen and (max-width: 495px) {
    > div {
      width: 100%;
    }
    > div button {
      margin-right: 0;
    }
  }
`;

export const PopBrowseBtnEdit = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  & button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }
  @media screen and (max-width: 495px) {
    & button {
      width: 100%;
      height: 40px;
    }
  }
  > div button {
    margin-right: 8px;
  }
  @media screen and (max-width: 495px) {
    > div {
      width: 100%;
    }
    > div button {
      margin-right: 0;
    }
  }
  display: none;
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const PopBrowseOverlay = styled.div`
  &:target {
    display: block;
  }
  display: none;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const StatusP = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  & p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
  ${({ $colour }) => ({
    orange: "background-color: #ffe4c2; color: #ff6d00;",
    green: "background-color: #b4fdd1; color: #06b16e;",
    purple: "background-color: #e9d4ff; color: #9a48f1;",
    gray: "background-color: #94a6be; color: #ffffff;",
  })[$colour]}
  ${({ $active }) => $active && "opacity: 1;"}
  ${({ $hidden }) => $hidden && "display: none;"}
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ThemeDown = styled.div`
  display: none;
  margin-bottom: 20px;
  @media screen and (max-width: 495px) {
    display: block;
  }
`;

export { CategoriesP, CategoriesTheme, PopupButton, Subttl } from "../../styles/Popup.styled";
