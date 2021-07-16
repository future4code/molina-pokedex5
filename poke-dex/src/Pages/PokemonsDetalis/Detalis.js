import React, { useEffect, useState } from 'react'
import base_url from '../../constants/Base_URL';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ConteinerCard,
CardImagem,
CardPoderes,
PokeImagem,
CardInformacoes,
CardTypes,
CardMoves
} 
from './styled';

const PokedexDetails = (props) => {
    const history = useHistory()
    const currentPokemon = props.match.params.pokemon
    const loadingGif = 'https://media.tenor.com/images/a742721ea2075bc3956a2ff62c9bfeef/tenor.gif'
    const [pokemonData, setPokemonData] = useState({
        sprites: {
            front_default: loadingGif,
            back_default: loadingGif
        },
        moves: [],
        types: [],
        stats: []

    })

    useEffect(() => {
        axios.get(`${base_url}/${currentPokemon}`)
            .then((res) => {
                setPokemonData(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                alert(err.response.message)
            })
    }, [currentPokemon])

    const goToHome = () => {
        history.push("/")
    }


    return (


        <ConteinerCard>
            <div>
                <button onClick={goToHome} >Voltar</button>
            </div>
            

            <CardImagem>
                <PokeImagem src={pokemonData.sprites.front_default} alt="Pokemon imagem frente" />
                <PokeImagem src={pokemonData.sprites.back_default} alt="Pokemon imagem costas" />
            </CardImagem>

            <CardInformacoes>
                <CardPoderes>
                    <h2>Poderes</h2>
                    
                    {pokemonData &&
                        pokemonData.stats.map((stat) => {
                            return (
                                <p key={stat.stat.name}>
                                    <strong>{stat.stat.name}: </strong>
                                    {stat.base_stat}
                                </p>
                            );
                        })}
                </CardPoderes>

                <CardTypes>
                    <h2>Tipo</h2>
                    {pokemonData &&
                        pokemonData.types.map((type) => {
                            return(

                                <p key={type.type.name}>
                                    <ul>
                                        <li>{type.type.name}</li>
                                    </ul>
                                </p>
                            ) 
                        })}
                </CardTypes>

                <CardMoves>
                    <h2>Principais Ataques</h2>
                    {pokemonData &&
                        pokemonData.moves.map((move, index) => {
                            return (
                                index < 5 &&
                                <p key={move.move.name}>
                                    <ul>
                                        <li>{move.move.name}</li>
                                    </ul>
                                </p>
                            );
                        })}
                </CardMoves>
            </CardInformacoes>
          
        </ConteinerCard>


    )


}

export default PokedexDetails