import React from 'react';
import queryString  from 'query-string';
import { useLocation } from 'react-router-dom';
import {heroes} from '../data/heroes';
import { HeroCard } from '../heores/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
   const { q = "" } = queryString.parse(location.search);
   
    const handleSubmit = (ev) => {
       ev.preventDefault();
       const text = ev.target[0].value;
       text && history.push(`?q=${text}`);
       
    };
    
    const heroesFiltered = getHeroesByName(q);
    return (
        <div>
            <h1>SearchScreen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="find your hero"
                            className="form-control"
                            name="searchText"
                            value={q}
                            onChange={ () => {}}
                        />

                        <button type="submit" className="btn m-1 btn-block btn-outline-primary">
                            Search
                        </button>

                    </form>
                </div>

                <div className="col-7">
                    <h4> Results</h4>
                    <hr/>

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard key={hero.id} {...hero}/>
                        ))
                    }
                </div>
            </div>



        </div>
    )
}
