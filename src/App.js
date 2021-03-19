import React, { Suspense } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
//React views
import Loader from './views/Loader';
//It is not the case in this app, if there was a call to a server
//views would show the Loader while lazily loanding the components
const Header = React.lazy(() => import('./views/Header'));
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