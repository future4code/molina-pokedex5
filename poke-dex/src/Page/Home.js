import React from 'react'
import { useHistory } from 'react-router-dom'

export const Home = () => {

    const history = useHistory()

    const goToPokedex = () => {
        history.push("/pokedex")
    }

    const goToPokedexDetalis = () => {
        history.push("/pokedexDetalis")
    }


    return (
        <div>
            <button onClick={goToPokedex} > PokedexList</button>
            <button onClick={goToPokedexDetalis}  > PokedexDetalis</button>
        </div>
    )
}