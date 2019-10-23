import React from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class PlayersList extends React.Component {
	render() {
		return (

			<Table className="eventsTable" borderless>
				<thead>
					<tr>
						<th></th>
						<th>Name</th>
						<th>Nationality</th>
					</tr>
				</thead>
				<tbody>
					{
						this.props.players.map((player, i) => (
							<tr>
								<td>{i + 1}</td>
								<td>
									<Link to={"/players/" + player.ID} className="event-title-link">{player.FirstName} {player.LastName}</Link>
								</td>
								<td>{player.Nationality}</td>
							</tr>
						))
					}
				</tbody>
			</Table>
		);
	}
}