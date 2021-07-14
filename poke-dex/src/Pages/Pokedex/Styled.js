import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 15vh;
  width: 100vw;
  background-color: silver;
`;

export const ButtonGoBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  height: 50px;
  width: 300px;
  margin-right: 300px;
  margin-left: 50px;
  :hover {
    cursor: pointer;
    background-color: grey;
  }
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  height: 85vh;
  width: 100vw;
  overflow: auto;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 250px;
  border: solid;
  justify-content: center;
  align-items: center;
`;

export const ImagemContainer = styled.div`
  display: flex;
  height: 200px;
  width: 200px;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  height: 50px;
  width: 200px;
  border-top: solid;
  background-color: red;
`;

export const ButtonCard = styled.button`
  display: flex;
  height: 50px;
  width: 200px;
  justify-content: center;
  align-items: center;
`;
