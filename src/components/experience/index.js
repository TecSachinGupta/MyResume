import React from 'react';

class Experience extends React.Component {
	render() {
		const data = this.props.employments.history.map((employment, index) => {
			return (
				<li className="timeline-event" key={`experience-${index}`}>
					<label className="timeline-event-icon"></label>
					<div className="timeline-event-copy">
					<p className="timeline-event-thumbnail">{`${employment.start} - ${employment.end ? employment.end : 'Till date' } `}</p>
					<h3>{`${employment.employer}, ${employment.state}, ${employment.country}`}</h3>
					<h4>{employment.position}</h4>
					<div className="timeline-summary"><ul>{employment.summary.split("-->").map(d => <li>{d}</li>)}</ul></div>
					</div>
				</li>
			)
		});
		return (
			<React.Fragment>
				<div className="componentTitle">
					<h1>{this.props.children} Experience</h1>
				</div>
				<div className="timeline-2">
					<ul className="timeline">
						{data}
					</ul>  
				</div>
			</React.Fragment>
		);
	}
}

export default Experience;
