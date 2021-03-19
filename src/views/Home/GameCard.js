import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
//App context
// import WeatherAppContext from '../../WeatherAppContext';
//helpers
// import getProp from '../../helpers/getProp';

const GameCard = props => {
    // console.log(props)
    // const { citiesData, setCitiesData } = useContext(WeatherAppContext);

    // const cityImage = getProp(props, 'picture');
    // const city = getProp(props, 'name', '');
    // const isHidden = getProp(props, 'isHidden', false);

    // const handleHideShow = e => {
    //     e.stopPropagation();
    //     e.preventDefault();
        
    //     const index = citiesData.findIndex(c => getProp(c, 'name') === city);
    //     const newData = citiesData.map((c, i) => {
    //         if (i === index) c.isHidden = !c.isHidden;
    //         return c;
    //     })

    //     localStorage.setItem('citiesData', JSON.stringify(newData));
    //     setCitiesData(newData);
    // };

    return (
        <Link to={`/`}>
            <div className="citycard_container">
                <i className="fa fa-times-circle-o" onClick={e=>console.log(e)} />
                {/* <img src={cityImage} alt="city image" className="citycard_picture" /> */}
                <div className="citycard_title">{'Game'}</div>
            </div>
        </Link>
    )
};

GameCard.propTypes = {

};

export default GameCard;
