import React from 'react';
import ICONS from './icons';

class Icons extends React.Component {
	getPath(iconName) {
		let icon = ICONS.icons.find(icon => icon.properties.name.toLowerCase() === iconName.toLowerCase());
		
		if (icon) {
			return icon.icon.paths.join(' ');
		} else {
			icon = ICONS.icons.find(icon => icon.properties.name.toLowerCase() === 'internet'.toLowerCase());
			return icon.icon.paths.join(' ');
		}
	}
	render() {
		return (
			<svg width={this.props.size} height={this.props.size} viewBox="0 0 1024 1024" className={this.props.className}>
				<path d={this.getPath(this.props.icon)}></path>
			</svg>
		);
	}
}
Icons.defaultProps = {
	size: 22,
}
export default Icons;