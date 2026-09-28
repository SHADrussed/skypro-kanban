import styled from "styled-components";

export const CalendarContent = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;
export const EmptyState = styled.div`
  width: 100%;
  padding: 80px 20px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  color: #94a6be;
`;
