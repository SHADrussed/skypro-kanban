import styled from "styled-components";

export const CategoriesP = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  & p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
  ${({ $colour }) =>
    ({
      "Web Design": "background-color: #ffe4c2; color: #ff6d00;",
      Research: "background-color: #b4fdd1; color: #06b16e;",
      Copywriting: "background-color: #e9d4ff; color: #9a48f1;",
      gray: "background-color: #94a6be; color: #ffffff;",
    })[$colour]}
  ${({ $active }) => $active && "opacity: 1;"}
  ${({ $placement }) => $placement === "top" && "display: block;"}
  @media screen and (max-width: 495px) {
    ${({ $placement }) => $placement === "top" && "display: none;"}
  }
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PopupButton = styled.button`
  border-radius: 4px;
  border: ${({ $filled }) => ($filled ? "none" : "0.7px solid #565eef")};
  background: ${({ $filled }) => ($filled ? "#565eef" : "transparent")};
  color: ${({ $filled }) => ($filled ? "#ffffff" : "#565eef")};
  outline: none;
  a {
    color: inherit;
  }
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }
`;

export const Subttl = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
