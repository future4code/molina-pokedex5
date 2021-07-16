import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const HeaderContainer = styled.div`
  display: flex;
  height: 20vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: red;

  img {
    height: 100px;
    width: 300px;
    position: relative;
    left: 200px;
  }
`;

export const ImgPokemon = styled.div`
  display: flex;
  width: 250px;
  height: 100px;
  position: relative;
  right: 55px;
`;

export const ButtonHomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 17vh;
  width: 20vw;
  position: relative;
  left: 400px;
`;

export const ButtonGoPokedex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 14vh;
  width: 8vw;
  background-color: white;
  border-radius: 100px;
  border: 5px solid black;

  :hover {
    cursor: pointer;
    background-color: white;
  }
`;

export const ImgPokedex = styled.div`
  display: flex;
  height: 14vh;
  width: 8vw;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 200px;

  img {
    border-radius: 20px;
    width: 7vw;
    height: 10vh;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 170vh;
  width: 100vw;
  background-color: red;
`;

export const ListPokemonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 300px);
  justify-items: center;
  align-items: center;
  height: 160vh;
  width: 90vw;
  gap: 10px;
  border: 30px solid black;
  background-color: white;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 250px;
  box-shadow: 10px 5px 5px silver;
  /* border: solid; */
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  img {
    display: flex;
    height: 160px;
    width: 200px;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonPokemonContainer = styled.div`
  display: flex;
  height: 50px;
  width: 200px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const ButtonCard = styled.button`
  display: flex;
  height: 50px;
  width: 200px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 15px;
  background-color: #ffd700;
  font-weight: bold;
  border: none;

  :hover {
    cursor: pointer;
    background-color: red;
  }
`;
