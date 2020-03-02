import React from 'react';

class Education extends React.Component {
	render() {
		return (
			<div className="history-tl-container">
				<ul className="tl">
					<li className="tl-item" ng-repeat="item in retailer_history">
						<div className="timestamp">3rd March 2015<br /> 7:00 PM</div>
						<div className="item-title">Start from Shire</div>
						<div className="item-detail">Start from Shire</div>
					</li>
					<li className="tl-item" ng-repeat="item in retailer_history">
						<div className="timestamp">3rd March 2015<br /> 7:00 PM</div>
						<div className="item-title">Start from Shire</div>
						<div className="item-detail">Start from Shire</div>
					</li>
					<li className="tl-item" ng-repeat="item in retailer_history">
						<div className="timestamp">3rd March 2015<br /> 7:00 PM</div>
						<div className="item-title">Start from Shire</div>
						<div className="item-detail">Start from Shire</div>
					</li>
				</ul>
			</div>
		);
	}
}

export default Education;
