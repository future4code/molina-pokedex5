import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 20vh;
  width: 100vw;
  background-color: red;
`;

export const ButtonGoListPokemon = styled.button`
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
