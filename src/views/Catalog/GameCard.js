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
    description,
}) => {

    return (
        <div className="citycard_container">
            <Link to={`/${name}`}>
                {/* <i className="fa fa-times-circle-o" onClick={e=>console.log(e)} /> */}
                <div className="citycard">
                    <img src={cover} alt="game image" />
                    <h4 className="citycard_title">{name}</h4>
                    <h5>Game Platform</h5>
                </div>
            </Link>
        </div>
    )
};

GameCard.propTypes = {

};

export default GameCard;
