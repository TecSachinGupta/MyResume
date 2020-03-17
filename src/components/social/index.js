import React from 'react';
import Icons from '../icons';

class Social extends React.Component {
	render() {
		const data = this.props.socialData.map((social, index) => {
			return (
				<li key={`social-${index}`}><a href={social.url} className={social.label.toLowerCase()}><Icons size="28" icon={social.label} ></Icons></a></li>
			)
		});
		return (
			<React.Fragment>
				<div className="componentTitleLeftSidebar"><h4>Social Profile Details</h4></div>
				<svg width="0" height="0" style={{"position":"absolute"}}>
				  <defs>
					<radialGradient cx="30%" cy="60%" id="instagramFill" r="1" fx="30%" fy="107%">
					  <stop offset="0%" stopColor="#fdf497" />
					  <stop offset="5%" stopColor="#fdf497" />		  
					  <stop offset="45%" stopColor="#fd5949" />	   
					  <stop offset="60%" stopColor="#d6249f" />
					  <stop offset="90%" stopColor="#285AEB" />
					</radialGradient>
				  </defs>
				</svg>
				<ul className="socialDetails" key="skills">
					{data}
				</ul>
			</React.Fragment>
		);
	}
}

export default Social;
