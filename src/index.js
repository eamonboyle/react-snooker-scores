import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadAllEventsThisSeason } from './actions/eventsActions';
import { loadAllPlayersThisSeason } from './actions/playersActions';
import { loadAllRankingsThisSeason } from './actions/rankingsActions';

import './style/bootstrap.min.css';
import './style/bootstrap-starter.css';
import './style/pages.css';

const store = configureStore();

store.dispatch(loadAllEventsThisSeason());
store.dispatch(loadAllPlayersThisSeason());
store.dispatch(loadAllRankingsThisSeason());

const App = () => {
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
}

ReactDOM.render(
	<App />, 
	document.getElementById('root')
)