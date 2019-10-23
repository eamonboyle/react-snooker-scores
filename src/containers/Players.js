import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PlayersList from '../components/PlayersList';

class Players extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div class="container main-content">
				<div class="row">
					<div class="col-sm-12">
						<h1 class="page-title">Players</h1>
						<PlayersList players={this.props.players} />
					</div>
				</div>
			</div>
		);
	}
}

Players.propTypes = {
	players: PropTypes.array.isRequired,
}

function mapStateToProps(state, ownProps) {
	return {
		players: state.players
	};
}

export default connect(mapStateToProps)(Players); 