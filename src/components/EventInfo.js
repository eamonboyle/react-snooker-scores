import React from 'react';

export default class EventInfo extends React.Component {
	render() {
		return (
			<div class="eventInfoContainer">
				<div>{this.props.event.Venue}</div>
			</div>
		);
	}
}