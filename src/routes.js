import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './containers/Home';

import Events from './containers/Events';
import EventDetails from './containers/EventDetails';

import Players from './containers/Players';
import PlayerDetails from './containers/PlayerDetails';

import Rankings from './containers/Rankings';

import Header from './components/Header';
import Footer from './components/Footer';

export default class Routes extends React.Component {
	render() {
		return (
			<BrowserRouter>

				<div>

					<Header />

					<Route exact path="/" component={Home} />
					<Route exact path="/events" component={Events} />
					<Route exact path="/events/:id" component={EventDetails} />
					<Route exact path="/players" component={Players} />
					<Route exact path="/players/:id" component={PlayerDetails} />
					<Route exact path="/rankings" component={Rankings} />

					<Footer />

				</div>

			</BrowserRouter>
		);
	}
}