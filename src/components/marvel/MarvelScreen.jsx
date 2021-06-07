import React from 'react'
import HeroesList from '../heroes/HeroesList'

const MarvelScreen = () => {
    return (
        <div>
            <h1>Marvel Screen</h1>
            <HeroesList 
                publisher="Marvel Comics"
            />
        </div>
    )
}

export default MarvelScreen
