import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  height: 85vh;
  width: 100vw;
  gap: 10px;
`;

export const Title = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 250px;
  border: solid;
  justify-content: center;
  align-items: center;

  img {
    display: flex;
    height: 180px;
    width: 180px;
    justify-content: center;
    align-items: center;
  }
`;


export const ButtonContainer = styled.div`
  display: flex;
  height: 50px;
  width: 200px;
  justify-content: center;
  align-items: center;
`;

export const ButtonCard = styled.button`
  display: flex;
  height: 40px;
  width: 200px;
  justify-content: center;
  align-items: center;
`;
