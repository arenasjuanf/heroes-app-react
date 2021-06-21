import React from 'react'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearanace,
    characters
}) => {
    return (
        <div className="card ms-3" >
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets/heroes/${id}.jpg`} className="card-img"  alt={superhero}/>
                </div>
            </div>
            { superhero }
        </div>
    )
}
