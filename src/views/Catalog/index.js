import React, { useState, useEffect } from 'react';
//components
import GameCard from './GameCard';
import Navigation from './Navigation';
import ScrollToTop from './ScrollToTop'
import Loader from '../Loader'
//context
import { useFetch } from '../../hooks/useFetch'

export default () => {
    const [games, setGames] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const { response=[], error, isLoading } = useFetch('all');
    
	if (error) throw new Error('Error fetching data');
    
	useEffect(() => {
        const { games, platforms } = response;
        console.log(response)
        setGames(games);
        setPlatforms(platforms);
	}, [response]);

    return (
        isLoading
        ?   <Loader />
        :   <>
                <Navigation platforms={platforms} />
                <div className="catalog_container">
                    {games.map((data, i) => <GameCard key={i} {...data} />)}
                </div>
                <ScrollToTop />
            </>
    )
};
