import React from 'react'; 
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	render() {
		return (
			<Nav className="site-header sticky-top py-1">
				<div class="container d-flex flex-column flex-md-row justify-content-between">
					<a class="py-2" href="#">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
					</a>
					<Link to="/" className="py-2 d-none d-md-inline-block">Home</Link>
					<Link to="/events" className="py-2 d-none d-md-inline-block">Upcoming Events</Link>
					<Link to="/past-events" className="py-2 d-none d-md-inline-block">Past Events</Link>
					<Link to="/players" className="py-2 d-none d-md-inline-block">Players</Link>
					<Link to="/results" className="py-2 d-none d-md-inline-block">Results</Link>
					<Link to="/rankings" className="py-2 d-none d-md-inline-block">Rankings</Link>
					<Link to="/events" className="py-2 d-none d-md-inline-block">Events</Link>
				</div>
			</Nav>
		);
	}
}