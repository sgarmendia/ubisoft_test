import React, { useState, useEffect, useContext } from 'react'
//App context
// import WeatherAppContext from '../../WeatherAppContext';
//services
// import fetchWeather from '../../services/fetchWeather';
// //helpers
// import getUniqueAndSorted from '../../helpers/getUniqueAndSorted';
// import getCelsiusTemp from '../../helpers/getCelsiusTemp';

const Header = () => {
    // const { setData, setCitiesData } = useContext(WeatherAppContext);
    const [refresh, setRefresh] = useState(false);

    // useEffect(() => {
    //     if(refresh) {
    //         const refreshData = async () => {
    //             try {
    //                 const data = await fetchWeather();
    //                 const cleanData = getCelsiusTemp(data);
    //                 const citiesData = getUniqueAndSorted(cleanData);

    //                 const newData = citiesData.map(c => {
    //                     c.isHidden = false;
    //                     return c;
    //                 })
            
    //                 localStorage.setItem('citiesData', JSON.stringify(newData));

    //                 setData(cleanData);
    //                 setCitiesData(newData);
    //             } catch (error) {
    //                 throw new Error(error);
    //             } finally {
    //                 setRefresh(false);
    //             }
    //         };

    //         refreshData();
    //     };
    // }, [refresh]);

    return (
        <header>
            <div className="header_container">
                <div className="header_title">Weather Elements</div>
                <button
                    className="btn reload"
                    onClick={() => setRefresh(true)}
                >
                    <i className={`fa fa-refresh ${refresh ? 'fa-spin' : ''}`} />
                    <span className="reload_text">Refresh</span>
                </button>
            </div>
        </header>
    )
};

export default Header;
