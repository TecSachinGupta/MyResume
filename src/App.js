import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'spectre.css';
import Contact from './components/contact';
import Education from './components/education';
import Experience from './components/experience';
import Header from './components/header';
import Heading from './components/heading';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
		<div className="container">
			<div className="card">
				<div className="card-body">
			
					<div className="columns">
						<div className="column col-12">
							<Header></Header>
						</div>
					</div>
					<div className="divider-vert"></div>
					<div className="columns">
						<div className="column col-4">
							<Skills></Skills>
						</div>
						
						<div className="column col-8">
							<Education></Education>
							<Experience></Experience>
						</div>
					</div>
			
				</div>
			</div>
		</div>
    </div>
  );
}

export default App;
