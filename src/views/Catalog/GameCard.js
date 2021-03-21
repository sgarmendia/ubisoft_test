import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
//App context
// import WeatherAppContext from '../../WeatherAppContext';
//helpers
// import getProp from '../../helpers/getProp';

const GameCard = ({
    name,
    cover,
}) => {

    return (
        <div className="gamecard_container">
            <Link to={`/${name}`}>
                {/* <i className="fa fa-times-circle-o" onClick={e=>console.log(e)} /> */}
                <div className="gamecard">
                    <img src={cover} alt="game image" />
                    <div className="gamecard_title">{name}</div>
                    <div className="gamecard_footnote">Game Platform</div>
                </div>
            </Link>
        </div>
    )
};

GameCard.propTypes = {

};

export default GameCard;
