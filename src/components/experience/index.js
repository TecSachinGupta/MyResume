import React from 'react';

class Experience extends React.Component {
	render() {
		return (
			<div className="timeline-2">
				<ul className="timeline">
					<li className="timeline-event">
						<label className="timeline-event-icon"></label>
						<div className="timeline-event-copy">
						<p className="timeline-event-thumbnail">April 2011 - heute</p>
						<h3>Geil,Danke! GmbH</h3>
						<h4>Geschäftsführerin eines Web-Studios</h4>
						<p><strong>Schwerpunkt: Frontend-Entwicklung</strong><br />Entwickeln von anspruchsvollen, animierten, responsive und adaptive Webseiten mit HTML5, SCSS, jQuery; für alle Browser, optimiert für Desktop, Notebook, Smartphones und Tablets (iOS, Android, Windows).</p>
						<p><strong>Projektmanagement mit Scrum</strong><br />Ständiges Verbessern des agilen Entwicklungsprozesses beispielsweise durch Grunt, Yeoman, GIT, JIRA und BrowserStack.</p>
						</div>
					</li>
					<li className="timeline-event">
						<label className="timeline-event-icon"></label>
						<div className="timeline-event-copy">
						<p className="timeline-event-thumbnail">November 2009 - März 2011</p>
						<h3>Freelancer</h3>
						<h4>Designer und Autor</h4>
						<p>Konzeption, Design und Produktion von Digitalen Magazinen mit InDesign, der Adobe Digital Publishing Suite und HTML5. Co-Autorin der Fachbücher "Digitales Publizieren für Tablets" und "Adobe Digital Publishing Suite" erschienen im dpunkt.verlag.</p>
						</div>
					</li>
					<li className="timeline-event">
						<label className="timeline-event-icon"></label>
						<div className="timeline-event-copy">
						<p className="timeline-event-thumbnail">April 2011 - heute</p>
						<h3>konplan gmbh</h3>
						<h4>IT-Consultant</h4>
						<p><strong>Systemarchitektur, Consulting</strong><br />Konzeption und Modellierung von Systemen und APIs für Digital Publishing und Entitlement nach SOA</p>
						</div>
					</li>
				</ul>  
			</div>
		);
	}
}

export default Experience;
