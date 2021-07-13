import React from 'react'
import { useHistory } from 'react-router-dom'

export const PokedexDetalis = () => {
    const history = useHistory()

    const goToHome = () => {
        history.push("/")
    }

    const goToPokedex = () => {
        history.push("/pokedex")
    }


    return (
        <div>
            <button onClick={goToHome} > Voltar </button>
            <button onClick={goToPokedex} > List Pokemon </button>
        </div>
    )
}