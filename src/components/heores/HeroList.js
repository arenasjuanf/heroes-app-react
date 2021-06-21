import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import PropTypes from 'prop-types';
import { HeroCard } from './HeroCard';
<style>
column-count: 3;
</style>

export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher)

    return (
        <div className="card-columns" style={{columnCount: 2}}>
            {
                heroes.map(h => (
                    <HeroCard key={h.id} {...h} />
                ))
            }
        </div>
    )
}

HeroList.props = {
    publisher: PropTypes.string.isRequired
}
