import styled from "styled-components";

export const ConteinerCard = styled.main`
  @media (max-width: 780px and min-width= 410px) {
    width: 990px;
    height: max-content;
  }
`;

export const CardImagem = styled.div`
  display: flex;
  flex-direction: column(2fr);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 50%;
  justify-content: center;
  margin: 20px auto 0 auto;
  margin-bottom: 10px;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
export const PokeImagem = styled.img`
  width: 300px;
  height: 250px;
  object-fit: cover;
`;
export const CardPoderes = styled.div`
  margin-right: 80px;
  margin-left: 50px;
  font-family: sans-serif;
`;

export const CardTypes = styled.div`
  font-family: sans-serif;
  margin: 0 20px 0 20px;
`;

export const CardMoves = styled.div`
  margin-left: 90px;

  font-family: sans-serif;
`;

export const CardInformacoes = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonGoBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid;
  height: 50px;
  width: 200px;
  margin-right: 400px;
  margin-left: 50px;
  border-radius: 15px;
  background-color: #ffd700;
  font-weight: bold;
  border: none;

  :hover {
    cursor: pointer;
    background-color: #00008b;
    color: white;
  }
`;
