import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
//components


const Game = ({ history }) => {
    // const history = useHistory();
    const { game } = useParams()

    // const { data } = useContext(WeatherAppContext);

    return (
        <div className="game_container">
            {/* <img src={''} alt={'game'} /> */}
            <button className="btn back" onClick={() => history.push('/')}>
                <i className="fa fa-arrow-left" />
                    {'Back to Games'}
            </button>
            <h2>{game}</h2>
        </div>
    );
};

Game.propTypes = {

};

export default Game;