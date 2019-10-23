import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EventsList from '../components/EventsList';

class Events extends React.Component {
	render() {
		return (
			<div class="container main-content">
				<div class="row">
					<div class="col-sm-12">
						<h1 class="page-title">Events</h1>
						<EventsList events={this.props.events} />
					</div>
				</div>
			</div>
		);
	}
}

Events.propTypes = {
	events: PropTypes.array.isRequired,
}

function mapStateToProps(state, ownProps) {
	var date = new Date();
	// added the -12 here as it may not show current events that have started
		date.setDate(date.getDate());
	var d = date,
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;
	return {
		events: state.events.filter(event => event.EndDate >= [year, month, day].join('-'))
	};
}

export default connect(mapStateToProps)(Events); 