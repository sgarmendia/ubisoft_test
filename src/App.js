import React, { Suspense } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
//React views
import Loader from './views/Loader';
import Header from './views/Header';
const Catalog = React.lazy(() => import('./views/Catalog'));
const Game = React.lazy(() => import('./views/Game'));

import '/styles/main.scss';

const App = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Catalog} />
					<Route path="/:game" component={props => <Game {...props} />} />
				</Switch>
			</Router>
		</Suspense>
	)
};

export default App;