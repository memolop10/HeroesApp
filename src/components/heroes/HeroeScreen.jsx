import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroesById';

const HeroeScreen = ({ history }) => {

const { heroeId } = useParams();
const hero = useMemo(() => getHeroesById(heroeId), [heroeId])
// const hero = getHeroesById( heroeId )

if (!hero) {
    return <Redirect to="/" />
}

const handleReturn = () => {

    if (history.length <= 2) {
        history.push('/')    
    } else {
        
        history.goBack();
    }
    
}

const {
    superhero,
    publisher, 
    alter_ego,
    first_appearance,
    characters
} = hero;

    return (
        <div className="row mt-5" >
           <div className="col-4 animate__animated animate__fadeInLeft">
                <img src={ `../assets/heroes/${ heroeId }.jpg` } alt={ superhero }
                    className="img-thumbnail"
                />
           </div>
           <div className="col-8 p-5 rounded animate__animated animate__fadeInDownBig"
                style={{ backgroundColor:'#0D142D' ,color:'white' }}
            >
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b> { alter_ego } </li>
                    <li className="list-group-item"> <b>Publisher:</b> { publisher } </li>
                    <li className="list-group-item"> <b>First apperarance:</b> { first_appearance } </li>
                </ul>

                <h5>Characters</h5>
                <p>{ characters }</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>
           </div>
        </div>
    )
}

export default HeroeScreen
