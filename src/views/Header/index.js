import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";


//App context
// import WeatherAppContext from '../../WeatherAppContext';
import ubi_logo from '/assets/logo/ubi_logo.png'

const Header = () => {
    const history = useHistory();
    // const { setData, setCitiesData } = useContext(WeatherAppContext);

    const handleLogoClick = () => {
        history.push("/");
    };

    return (
        <header>
            <div className="header_container">
                <div className="header_logo" onClick={handleLogoClick}>
                    <img src={ubi_logo} alt="Ubisoft"/>
                </div>
                <div className="header_title">Games catalog X1</div>
            </div>
        </header>
    )
};

export default Header;
