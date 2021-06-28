import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import PropTypes from 'prop-types';
import { HeroCard } from './HeroCard';
<style>
    column-count: 3;
</style>

export const HeroList = ({publisher}) => {
 
    const heroes = useMemo(() =>  getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4" style={{columnCount: 3}}>
            {
                heroes.map(h => (
                    <HeroCard className="mt-1"key={h.id} {...h} />
                ))
            }
        </div>
    )
}

HeroList.props = {
    publisher: PropTypes.string.isRequired
}
