import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navigation = ({ platforms }) => {
    const allButton = useRef(null)

    useEffect(() => {
        allButton.current.focus()
    }, [])

    return (
        <div className="navigation_container">
            <div className="navigation_inner">
                <button key='all'
                    ref={allButton}
                    className="btn navigation"
                    onClick={(e) => console.log(e.target)}
                >
                    {'ALL'}
                </button>
                {platforms.map((platform, i) => (
                    <button key={i}
                        className="btn navigation"
                        onClick={(e) => console.log(e.target)}
                    >
                        {platform}
                    </button>
                ))}
            </div>
        </div>
    )
};

Navigation.propTypes = {
    platforms: PropTypes.array.isRequired
};

export default Navigation;
