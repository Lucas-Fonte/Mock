import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  height: 350px;

  h1 {
    margin-top: 30px;
  }

`;

export const EmailContainer = styled.div`
    margin-top: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    input {
      text-align: center; 
      width: 300px;
      border: 0px solid;
      font-size: 18px;
      font-weight: bold;
      padding: 10px 35px;
      background: rgba(0, 0, 0, 0);
      margin-bottom: 20px;
    }

    input:focus::placeholder {
      color: transparent;
    }

    svg {
      cursor: pointer;
    }
`;
