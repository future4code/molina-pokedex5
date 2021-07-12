import React from 'react'
import { useHistory } from 'react-router-dom'

export const Pokedex = () => {

    const history = useHistory()

    const goToHome = () => {
        history.push("/")
    }


    return (
        <div>
            <button onClick={goToHome} > Voltar </button>
        </div>
    )
}