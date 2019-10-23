import React from 'react';

export default class PlayerInfo extends React.Component {
	render() {
		return (
			<div class="eventInfoContainer">
				<div class="row">
					<div class="col-md-4">
						<img src={this.props.player.Photo} width="100%" />
					</div>
					<div class="col-md-8">
						<p>		{this.props.player.FirstName} {this.props.player.LastName}
						</p>
						<p>{this.props.player.Nationality}
						</p>
						<p>Date of Birth: {this.props.player.Born}</p>
						<p>Twitter: {this.props.player.Twitter}</p>
					</div>
				</div>
			</div>
		);
	}
}