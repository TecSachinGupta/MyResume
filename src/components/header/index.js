import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<div>
				<img src={process.env.PUBLIC_URL + this.props.imageUrl} alt="" width="100%" height="10%" style={{"image-orientation": "from-image"}} />
				<h3>{this.props.myName}</h3>
			</div>
		);
	}
}

export default Header;
