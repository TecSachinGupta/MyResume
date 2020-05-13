import React from 'react';

class Projects extends React.Component {
	render() {
		const data = this.props.projects.map((project, index) => {
			return (
				<li className="timeline-item" key={`project-${index}`}>
					<div className="timeline-info">
						<span>{`${project.start} - ${project.end ? project.end : 'Till date' } `}</span>
					</div>
					<div className="timeline-marker"></div>
					<div className="timeline-content">
						<h2>{project.title}, <span>{project.summary}</span></h2>
						<div className="timeline-summary"><ul>{project.description.split("-->").map(d => <li>{d}</li>)}</ul></div>
					</div>
				</li>
			)
		});
		return (
			<React.Fragment>
				<div className="componentTitle">
					<h1>{this.props.children} Projects</h1>
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

export default Projects;
