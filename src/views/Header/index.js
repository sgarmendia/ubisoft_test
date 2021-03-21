import React, { useContext } from 'react';
import { useHistory, useLocation } from "react-router-dom";
//context
import gamesContext from '../../gamesContext';
//logo
import ubi_logo from '/assets/logo/ubi_logo.png'

const Header = () => {
    const history = useHistory();
    const { pathname="/" } = useLocation();
    const { setFilter } = useContext(gamesContext);

    const handleLogoClick = () => {
        setFilter("ALL")
        history.push("/");
    };

    return (
        <header>
            <div className="header_container">
                <div className="header_logo" onClick={handleLogoClick}>
                    <img src={ubi_logo} alt="Ubisoft"/>
                </div>
                <div className="header_title">
                    {
                        pathname === "/"
                            ?   'Games catalog X1'
                            :   'Game details'
                    }
                </div>
            </div>
        </header>
    )
};

export default Header;
