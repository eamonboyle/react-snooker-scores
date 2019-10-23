import React from 'react';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class EventsList extends React.Component {

	render() {
		return (

			<Table className="eventsTable" borderless>
				<thead>
					<tr>
						<th>Date</th>
						<th>Tournament</th>
						<th>Venue</th>
					</tr>
				</thead>
				<tbody>
					{
						this.props.events.map(event => {
							
						var date = new Date(event.StartDate);
						var d = date,
							month = '' + (d.getMonth() + 1),
							day = '' + d.getDate(),
							year = d.getFullYear();

						if (month.length < 2) month = '0' + month;
						if (day.length < 2) day = '0' + day;

							return (<tr>
								<td>{[year, month, day].join('-')}</td>
								<td>
									<Link to={"/events/" + event.ID} className="event-title-link">{event.Name}</Link>
								</td>
								<td>{event.Venue}</td>
							</tr>
							)
						})
					}
				</tbody>
			</Table>
		);
	}
}