import React, { Suspense, useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
//Hooks
import { useFetch } from './hooks/useFetch'
//App context
import GamesContext from './gamesContext';
//App views
import Loader from './views/Loader';
import Header from './views/Header';
const Catalog = React.lazy(() => import('./views/Catalog'));
const Game = React.lazy(() => import('./views/Game'));
//Styles
import '/styles/main.scss';

const App = () => {
	const [filter, setFilter] = useState('ALL');

	//I am simulating calling a server to implement async code
    const { response={}, error, isLoading } = useFetch('all');
	if (error) throw new Error('Error fetching data');

	const { games=[], platforms=[] } = response;

	const filteredGames = games.filter(game => {
		if (filter === 'ALL') return game;
		return game.platform === filter;
	});

	const gamesContext = { 
		platforms,
		setFilter,
		filter,
		games: filteredGames,
	};

	return (
		isLoading
		?	<Loader />
		:	<GamesContext.Provider value={gamesContext}>
				<Suspense fallback={<Loader />}>
					<Router>
						<Header />
						<Switch>
							<Route exact path="/" component={Catalog} />
							<Route path="/:game" component={props => <Game {...props} />} />
						</Switch>
					</Router>
				</Suspense>
			</GamesContext.Provider>
	);
};

export default App;