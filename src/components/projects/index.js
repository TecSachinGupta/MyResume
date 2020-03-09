import React from 'react';

class Projects extends React.Component {
	render() {
		return (
			<div className="timeline-3">
			  <div className="main-timeline">
				<div className="timeline">
				  <div className="timeline-content">
					<span className="timeline-year">2018</span>
					<div className="timeline-icon">
					  <i className="fa fa-rocket" aria-hidden="true"></i>
					</div>
					<div className="content">
					  <h3 className="title">Web Development</h3>
					  <p className="description">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
					  </p>
					</div>
				  </div>
				</div>
				
				<div className="timeline">
				  <div className="timeline-content">
					<span className="timeline-year">2017</span>
					<div className="timeline-icon">
					  <i className="fa fa-edit" aria-hidden="true"></i>
					</div>
					<div className="content">
					  <h3 className="title">Creapure</h3>
					  <p className="description">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
					  </p>
					</div>
				  </div>
				</div>

			  </div>
			</div>
		);
	}
}

export default Projects;
