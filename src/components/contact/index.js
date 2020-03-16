import React from 'react';
import Icons from '../icons';

class Contact extends React.Component {
	render() {
		const locationDetail = `${this.props.contact.location.address} ${this.props.contact.location.city}, ${this.props.contact.location.state}, ${this.props.contact.location.country} - ${this.props.contact.location.code}`;
		return (
			<React.Fragment>
				<div className="componentTitleLeftSidebar"><h4>Contact</h4></div>
				<ul className="contactDetails">
					<li><Icons size="25" icon="phone"></Icons> <span>{this.props.contact.phone}</span> </li>
					<li><Icons size="25" icon="mail"></Icons> <span>{this.props.contact.email}</span> </li>
					<li><Icons size="25" icon="world"></Icons> <span><a href={this.props.contact.website}>{this.props.contact.website}</a></span> </li>
					<li><Icons size="25" icon="internet"></Icons> <span><a href={this.props.contact.wordpress}>{this.props.contact.wordpress}</a></span> </li>
					<li><Icons size="25" icon="location"></Icons> <span>{locationDetail}</span> </li>
				</ul>
			</React.Fragment>	
		);
	}
}

export default Contact;
