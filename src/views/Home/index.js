import React, { useState, useEffect } from 'react';
//components
import GameCard from './GameCard';
import Loader from '../Loader'
//context
import {useFetch} from '../../hooks/useFetch'

const Home = () => {
    const [games, setGames] = useState([]);
    const { response=[], error, isLoading } = useFetch('games');

	if (error) throw new Error('Error fetching data');

	useEffect(() => {
        console.log(response)
        const { games } = response;
        setGames(games)
	}, [response]);

    return (
        isLoading
        ?   <Loader />
        :   <div className="home_container">
                {games.map((data, i) => <GameCard key={i} {...data} />)}
            </div>
    )
};

export default Home;
