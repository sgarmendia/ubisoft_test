import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const GameCard = ({
    name,
    cover,
}) => (
    <div className="gamecard_container" data-testid="gamecard">
        <Link to={`/${name}`}>
            <div className="gamecard">
                <img src={cover} alt="game image" />
                <div className="gamecard_title">{name}</div>
                <div className="gamecard_footnote">Game Platform</div>
            </div>
        </Link>
    </div>
);

GameCard.propTypes = {
    name: PropTypes.string,
    cover: PropTypes.string,
};

export default GameCard;
