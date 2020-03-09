import React from 'react';
import ICONS from './icons';

class Icons extends React.Component {
	getPath(iconName) {
		const icon = ICONS.icons.find(icon => icon.properties.name.toLowerCase() === iconName.toLowerCase());
		
		if (icon) {
			return icon.icon.paths.join(' ');
		} else {
			console.warn(`icon ${iconName} does not exist.`);
			return '';
		}
	}
	render() {
		return (
			<svg width={this.props.size} height={this.props.size} viewBox="0 0 1024 1024">
				<path d={this.getPath(this.props.icon)}></path>
			</svg>
		);
	}
}
Icons.defaultProps = {
	size: 22,
}
export default Icons;