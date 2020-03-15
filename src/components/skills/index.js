import React from 'react';
// import Icons from '../icons';

class Skills extends React.Component {
	render() {
		const data = this.props.skills.sets.map(set => {
			return (
				<li>
					<div className="skillsTitleSet">{set.name}</div>
					<div className="subSkillsDetails">
						<ul className="">
							{set.skills.map(skill => {
								return (
									<li>
										{skill.name}
										<div className="bar bar-sm">
										<div class="bar-item" role="progressbar" style={{"width": `${skill.level * 10}%`}} aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="10"></div>
										</div>
									</li>
								)
							})}
						</ul>
					</div>
				</li>
			)
		});
		return (
			<React.Fragment>
				<div className="componentTitleLeftSidebar"><h4>Professional Skills</h4></div>
				<div className="skillsDetails">
					<ul className="">
						{data}
					</ul>
				</div>
			</React.Fragment>
		);
	}
}

export default Skills;
