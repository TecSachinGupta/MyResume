import React from 'react';

class Header extends React.Component {
	render() {
		// style={{"image-orientation": "from-image"}}
		return (
			<div className="leftSideHeader">
				<img src={process.env.PUBLIC_URL + this.props.imageUrl} alt="" width="100%" height="10%"  />
				<h3>{this.props.myName}</h3>
			</div>
		);
	}
}

export default Header;
