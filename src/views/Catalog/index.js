import React, { useState, useContext } from 'react';
//context
import GamesContext from '../../gamesContext';
//components
import GameCard from './GameCard';
import Navigation from './Navigation';
import ScrollToTop from './ScrollToTop';

export default () => {
    const { games=[] } = useContext(GamesContext)
    return (
        <>
            <Navigation />
            <div className="catalog_container">
                {games.map((data, i) => <GameCard key={i} {...data} />)}
            </div>
            <ScrollToTop />
        </>
    )
};
