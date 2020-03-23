import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 5px 10px;
  img {
    margin-left: -10%;
  }
`;

export const SideContainer = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HorizontalContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 33px; 

  svg {
    margin-top: 8px;
  }
`;
