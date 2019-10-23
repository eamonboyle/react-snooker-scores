import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PlayersList from '../components/PlayersList';

class Rankings extends React.Component {
	render() {
		console.log('TEST');
		console.log(this.props);
		return (
			<div class="container main-content">
				<div class="row">
					<div class="col-sm-12">
						<h1 class="page-title">Rankings</h1>
						<PlayersList players={this.props.rankings} />
					</div>
				</div>
			</div>
		);
	}
}

Rankings.propTypes = {
	rankings: PropTypes.array.isRequired,
}

function mapStateToProps(state, ownProps) {
	return {
		rankings: state.rankings
	};
}

export default connect(mapStateToProps)(Rankings); 