import React from 'react';
import PropTypes from 'prop-types';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import Dashboard from './components/Dashboard';
import Websites from './components/Websites';
import Website from './components/Website';

const Routes = (
	<Route path='/' component={App} >
		<IndexRoute component={Dashboard} />
		<Route path='Dashboard' component={Dashboard} />
		<Route path='Websites' component={Websites} />
		<Route path="Website/:key" component={Website} />
	</Route>
);

export default Routes