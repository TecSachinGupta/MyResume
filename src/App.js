import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'spectre.css';
import Contact from './components/contact';
import Education from './components/education';
import Experience from './components/experience';
import Header from './components/header';
import Icons from './components/icons';
import Projects from './components/projects';
import Skills from './components/skills';
import Social from './components/social';
import mydata from './my_data';

function App() {
  return (
    <div className="App">
		<div className="container">
			<div className="card">
				<div className="card-body">
					<div className="columns">
						<div className="column col-sm-12 col-4">
							<Header imageUrl={mydata.info.profilePhotoURL} myName={`${mydata.firstName} ${mydata.lastName}`} ></Header>
							<blockquote className="show-sm">{mydata.info.brief}</blockquote>
							<Contact contact={mydata.contact}></Contact>
							<Skills skills={mydata.skills}></Skills>
							<Social socialData={mydata.social}></Social>
						</div>
						
						<div className="column col-sm-12 col-8">
  							<blockquote className="hide-sm">{mydata.info.brief}</blockquote>
							<Experience employments={mydata.employment}><Icons icon="briefcase" size="45"></Icons></Experience>
							<Education educations={mydata.education}><Icons icon="study" size="45"></Icons></Education>
							<Projects projects={mydata.projects}><Icons icon="tools" size="45"></Icons></Projects>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  );
}

export default App;
