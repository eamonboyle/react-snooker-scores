import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EventInfo from '../components/EventInfo';

class EventDetails extends React.Component {
	render() {
		return (
			<div class="container main-content">
				<div class="row">
					<div class="col-sm-12">
						<h1 class="page-title">{this.props.event.Name}</h1>
						<EventInfo event={this.props.event} />
					</div>
				</div>
			</div>
		);
	}
}

EventDetails.propTypes = {
	event: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownProps) {
	let event = {Name: ''};
  const eventId = ownProps.match.params.id;
  if (state.events.length > 0) {
    event = Object.assign({}, state.events.find(event => parseInt(event.ID) === parseInt(eventId)))
  }
  return {event: event};
}

export default connect(mapStateToProps)(EventDetails); 