import React from 'react';

class Education extends React.Component {
	render() {
		const data = this.props.educations.history.map(education => {
			return (
				<li className="timeline-item">
					<div className="timeline-info">
						<span>{`${education.start} - ${education.end ? education.end : 'Till date' } `}</span>
					</div>
					<div className="timeline-marker"></div>
					<div className="timeline-content">
						<h2>{`${education.title} ${education.fieldOfStudy? ' in ' + education.fieldOfStudy : '' } `} <span>{`from ${education.institution},${education.state},${education.country} `}</span></h2>
						<p>{education.summary}</p>
					</div>
				</li>
			)
		});
		return (
			<React.Fragment>
				<div className="componentTitle">
					<h1>{this.props.children} Education</h1>
				</div>
				<div className="timeline-1">
					<ul className="timeline">
						{data}
					</ul>
				</div>
			</React.Fragment>
		);
	}
}

export default Education;
