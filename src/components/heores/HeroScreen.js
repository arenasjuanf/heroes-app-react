import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroById';

const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

    const handleCLick = () => { 
        history.push('/');
    }

    if(!hero) return <Redirect to="/" /> 

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../../../assets/heroes/${heroeId}.jpg`} className="img-thumbnail" alt={superhero}/>
            </div>
            <div className="col-8">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b> Alter ego:</b> {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b> Publisher:</b> {publisher}
                    </li>
                    <li className="list-group-item">
                        <b> first aapeareance:</b> {first_appearance}
                    </li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button type="btn" className="btn btn-outline-info" onClick={ handleCLick }>
                    Return
                </button>
            </div>
        </div>
    )
}

export default HeroScreen;