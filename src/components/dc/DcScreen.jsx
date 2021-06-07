import React from 'react'
import HeroesList from '../heroes/HeroesList'

const DcScreen = () => {
    return (
        <div>
            <h1>DC Screen</h1>
            <HeroesList 
                publisher="DC Comics"
            />
        </div>
    )
}

export default DcScreen
