import React, { useContext } from 'react';
//context
import gamesContext from '../../gamesContext';

const Navigation = () => {
    const { platforms, setFilter, filter } = useContext(gamesContext);

    return (
        <div className="navigation_container">
            <div className="navigation_inner">
                <button key="all"
                    className={`btn navigation ${filter === 'ALL' ? 'clicked' : ''}`}
                    name={"ALL"}
                    onClick={e => setFilter(e.target.name)}
                >
                    {'ALL'}
                </button>
                {platforms.map((platform, i) => {
                    const clicked = filter === platform;
                    return (
                        <button key={i}
                            className={`btn navigation ${clicked ? 'clicked' : ''}`}
                            name={platform}
                            onClick={e => setFilter(e.target.name)}
                        >
                            {platform}
                        </button>
                    )
                })}
            </div>
        </div>
    )
};

export default Navigation;
