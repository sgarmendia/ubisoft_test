import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
//context
import gamesContext from '../../gamesContext';

const Game = () => {
    const { games } = useContext(gamesContext);
    const { game } = useParams();

    const { name='N/A', hero, description='N/A' } = games.find(g => g.name === game) || {};

    return (
        <div className="game_container">
            <img src={hero} alt={'game hero image'} />
            <section className="game_card" name="game_card">
                <div className="game_card_header">
                    <div className="game_title">{name}</div>
                    <div className="game_platform">{'Game platform'}</div>
                </div>
                <div className="game_description">{description}</div>
            </section>
        </div>
    );
};

export default Game;