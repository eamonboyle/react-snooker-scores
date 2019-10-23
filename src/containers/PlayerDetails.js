import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PlayerInfo from '../components/PlayerInfo';

class PlayerDetails extends React.Component {
	render() {
		return (
			<div class="container main-content">
				<div class="row">
					<div class="col-sm-12">
						<h1 class="page-title">{this.props.player.FirstName} {this.props.player.LastName}</h1>
						<PlayerInfo player={this.props.player} />
					</div>
				</div>
			</div>
		);
	}
}

PlayerDetails.propTypes = {
	player: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownProps) {
	let player = {FirstName: '', LastName: ''};
  const playerId = ownProps.match.params.id;
  if (state.players.length > 0) {
    player = Object.assign({}, state.players.find(player => parseInt(player.ID) === parseInt(playerId)))
  }
  return {player: player};
}

export default connect(mapStateToProps)(PlayerDetails); 