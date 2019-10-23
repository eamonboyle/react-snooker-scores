import { combineReducers } from 'redux';
import events from './eventReducer';
import players from './playerReducer';
import rankings from './rankingReducer';

const rootReducer = combineReducers({
	events,
	players,
	rankings
});

export default rootReducer;