import React from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ platforms }) => {
    return (
        <div className="navigation_container">
            {platforms.map((platform, i) => (
                <button key={i} 
                    onClick={(e) => console.log(e.target)}
                >
                    {platform}
                </button>
            ))}
        </div>
    )
};

Navigation.propTypes = {
    platforms: PropTypes.array.isRequired
};

export default Navigation;
